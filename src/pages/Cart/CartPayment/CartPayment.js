import React, { Component } from 'react';
import './CartPayment.scss';

export class CartPayment extends Component {
  render() {
    return (
      <div className="paymentButton">
        <button type="button" className="countBtn">
          계좌이체
        </button>
        <button type="button" className="cardBtn">
          카드결제
        </button>
      </div>
    );
  }
}

export default CartPayment;
