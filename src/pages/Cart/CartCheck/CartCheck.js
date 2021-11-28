import React, { Component } from 'react';
import './CartCheck.scss';

export class CartCheck extends Component {
  render() {
    return (
      <div className="agreeCheckBox">
        <div className="servicInfoCheck">
          <input type="checkbox" id="servicInfoCheck" value="" />
          <label htmlFor="servicInfoCheck">
            <a href="." className="necessaryServiceLink">
              [필수]
            </a>
            홀라
            <a href=".">유료서비스 이용약관</a> 및
            <a href="."> 개인정보 수집 및 이용</a>에 동의합니다.
          </label>
        </div>
        <div className="infoCheck">
          <input type="checkbox" id="infoCheck" />
          <label htmlFor="infoCheck">
            <a href="." className="necessaryLinkInfo">
              [필수]
            </a>
            상품, 가격, 할인 정보를 확인하였으며, 이에 동의합니다.
          </label>
        </div>
      </div>
    );
  }
}

export default CartCheck;
