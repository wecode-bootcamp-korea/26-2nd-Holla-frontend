import React, { Component } from 'react';
import './NavMenu.scss';

export class NavMenu extends Component {
  render() {
    return (
      <aside className="menuList">
        <div className="exitButton">x</div>
        <div className="loginContainer">
          <input type="button" className="loginButton" value="카카오 로그인" />
          <img alt="kakao" src="kakao.png" />
        </div>

        <div className="imgContainer" />
      </aside>
    );
  }
}

export default NavMenu;
