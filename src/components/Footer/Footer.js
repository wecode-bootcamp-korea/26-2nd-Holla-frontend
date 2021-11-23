import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerLeft">
          <div className="footerInfo">
            <h1>홀라</h1>
            <p>이용약관</p>
            <p>개인정보 처리방침</p>
            <p>제휴 문의</p>
            <p>B2B 멤버쉽 안내</p>
            <p>오디오북 카드</p>
          </div>
          <div className="footerSns" />
        </div>
      </footer>
    );
  }
}

export default Footer;
