/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { HiViewList } from 'react-icons/hi';
import { BsBag } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import Cart from '../../pages/Cart/Cart';
import { Route, Link } from 'react-router-dom';
import './Nav.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
    this.hamburgerRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.clickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOutside);
  }

  clickOutside = e => {
    const condition =
      this.hamburgerRef.current &&
      !this.hamburgerRef.current.contains(e.target);

    if (condition) {
      this.setState({
        isOpened: false,
      });
    }
  };

  handleKakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      success: response => {
        fetch('http://10.58.6.179:8000/users/kakao/signin', {
          headers: {
            Authorization: response.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.message === 'SUCCESS') {
              alert(`${res.results.name}님 환영합니다!`);
              localStorage.setItem('access_token', res.access_token);
              localStorage.setItem('userInfo', JSON.stringify(res.results));
              this.setState({
                isOpened: false,
              });
              this.props.history.push('/');
            } else {
              alert('다시 시도해주세요!');
            }
          });
      },
      fail: error => {
        console.log(error);
      },
    });
  };

  handleKakaoLogout = () => {
    const { Kakao } = window;

    if (!Kakao.Auth.getAccessToken()) {
      alert('Not logged in.');
      return;
    }

    Kakao.Auth.logout(() => {
      alert('로그아웃이 되었습니다.');
      localStorage.removeItem('access_token');
      localStorage.removeItem('userInfo');

      this.setState({
        isOpened: false,
      });
      this.props.history.push('/');
    });
  };

  handleClick = () => {
    const { isOpened } = this.state;
    this.setState({
      isOpened: !isOpened,
    });
  };

  render() {
    const { isOpened } = this.state;
    const isLogined = localStorage.getItem('access_token');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return (
      <>
        <nav className="navWrapper">
          <div className="navLeft">
            <HiViewList className="navHamberger" onClick={this.handleClick} />

            {isLogined && <p className="userName">{userInfo.name}님</p>}
          </div>
          <span className="logoName">홀라</span>
          <div className="navRight">
            <Link to="/Cart">
              {isLogined && <BsBag className="cartIcon" />}
            </Link>
            <div className="navSearchBar">
              <input type="text" placeholder="키워드 혹은 강사/저자를 입력" />
              <GoSearch className="searchIcon" />
            </div>
          </div>
        </nav>
        {isOpened && (
          <NavMenu
            className="burgerMenu"
            handleClick={this.handleClick}
            hamburgerRef={this.hamburgerRef}
            kakaoLogin={this.handleKakaoLogin}
            kakaoLogout={this.handleKakaoLogout}
            isLogined={isLogined}
            userInfo={userInfo}
          />
        )}
      </>
    );
  }
}

export default withRouter(Nav);
