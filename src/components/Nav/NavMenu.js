import React, { Component } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import './NavMenu.scss';

export class NavMenu extends Component {
  render() {
    return (
      <aside className="menuList">
        <input type="button" className="exitButton" value="X" />
        <div className="loginContainer">
          <input
            type="button"
            className="loginButton"
            value="카카오톡 로그인"
          />
          <RiKakaoTalkFill className="kakaoIcon" />
        </div>

        <div className="imgContainer">
          <img src="https://images.unsplash.com/photo-1571258126466-de842f523326?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJvb2t8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <div className="imgCenter">
            <div className="saying">"</div>
            <div className="saying">Whenever you read a good book, </div>
            <div className="saying"> somewhere in the world a door opens </div>
            <div className="saying">to allow in more light.</div>
            <div className="saying">"</div>
            <div className="saying">-Vera Nazzarian-</div>
          </div>
        </div>
      </aside>
    );
  }
}

export default NavMenu;
