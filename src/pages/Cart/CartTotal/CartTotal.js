import React, { Component } from 'react';
import './CartTotal.scss';

export class CartTotal extends Component {
  render() {
    const { total, totalItemQuantity } = this.props;
    return (
      <>
        <div className="cartTotalBook">
          <span className="buyListText">구매목록 </span>
          <span className="buyRightText">{totalItemQuantity}권</span>
        </div>
        <div className="cartTotalpay">
          <span className="payListText">총 결제금액 </span>
          <span className="payRightText"> {total}원</span>
        </div>
      </>
    );
  }
}

export default CartTotal;
