import React, { Component } from 'react';
import { HiViewList } from 'react-icons/hi';
import { BsBag } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import './Nav.scss';
import '../../styles/common.scss';

export class Nav extends Component {
  render() {
    return (
      <nav className="navWrapper">
        {/* <div className="navContainer"> */}

        <div className="navLeft">
          <HiViewList className="navHamberger" />
          <div className="userInfo">
            <span className="userName">설혜린님</span>
            <span className="userGrade">일반회원</span>
          </div>
        </div>

        <span className="logoName">홀라</span>

        <div className="navRight">
          <BsBag className="cartIcon" />
          <div className="navSearchBar">
            <input type="text" placeholder="키워드 혹은 강사/저자를 입력" />
            <GoSearch className="searchIcon" />
          </div>
        </div>
        {/* </div> */}
      </nav>
    );
  }
}

export default Nav;
