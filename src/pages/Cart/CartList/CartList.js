import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CartList.scss';

export class CartList extends Component {
  render() {
    // const { cartData } = this.props;
    const { product_id, user_id, product_list } = this.props;
    const { checkedList, handleCheckBox } = this.props;
    // const { product_list } = this.props;
    // console.log('checkedList', checkedList);

    return (
      <div className="bookInfo">
        <div className="bookTitleCheck">
          <input
            type="checkbox"
            id={`checked${product_id}`}
            checked={checkedList[product_id - 1]}
            onChange={() => handleCheckBox(product_id - 1)}
            value=""
          />
          <label htmlFor={`checked${product_id}`}>
            <a href="." className="bookDetailLink">
              <span className="bookTextColor">[오디오북]</span>
              {product_list.product_title}
            </a>
          </label>
        </div>
        <div className="bookContentBox">
          <img
            className="bookCover"
            src={product_list.product_image_url}
            alt="책이미지"
          />
          <div className="bookInfoContent">
            <span className="bookAuthor">{product_list.author_name}</span>
          </div>
        </div>
        <div className="bookInfoCostBox">
          <div className="bookInfoCost">{product_list.product_price}원</div>
        </div>
      </div>
    );
  }
}

export default CartList;
