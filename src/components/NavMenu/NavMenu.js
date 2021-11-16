import React, { Component } from 'react';
import './NavMenu.scss';

/* <로그인 api>
{
    "results" : {
        "name"  : "설혜린",
        "email" : "wecode@gmail.com"
        },
    "access_token" : "SDADFGTT234325SDFGtgDSfdsad"
}             */

export class NavMenu extends Component {
  render() {
    const {
      handleClick,
      hamburgerRef,
      kakaoLogin,
      kakaoLogout,
      isLogined,
      userInfo,
    } = this.props;

    return (
      <>
        <aside className="menuList" ref={hamburgerRef}>
          <button type="button" className="exitButton" onClick={handleClick}>
            X
          </button>
          <div className="loginContainer">
            {!isLogined ? (
              <button className="loginButton" onClick={kakaoLogin}>
                카카오톡으로 간편로그인
              </button>
            ) : (
              <div className="loginUser">
                <span className="loginName">{userInfo.name}</span>
                <span className="loginTitle">님</span>
                <div className="loginEmail">{userInfo.email}</div>
              </div>
            )}
          </div>
          <div className="imgContainer">
            <img
              src="https://images.unsplash.com/photo-1571258126466-de842f523326?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJvb2t8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="바탕이미지"
            />
            <div className="imgCenter">
              <div className="saying">"</div>
              <div className="saying">Whenever you read a good book, </div>
              <div className="saying">somewhere in the world a door opens</div>
              <div className="saying">to allow in more light.</div>
              <div className="saying">"</div>
              <div className="saying">-Vera Nazzarian-</div>
            </div>
          </div>
          {isLogined && (
            <div className="logoutWrap">
              <button className="logoutButton" onClick={kakaoLogout}>
                로그아웃
              </button>
            </div>
          )}
        </aside>
        <div className="navOverlay" />
      </>
    );
  }
}

export default NavMenu;
