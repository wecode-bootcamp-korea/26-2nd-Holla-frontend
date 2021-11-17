import React, { Component } from 'react';
import CartList from './CartList/CartList';
import CartTotal from './CartTotal/CartTotal';
import CartCheck from './CartCheck/CartCheck';
import CartPayment from './CartPayment/CartPayment';
import './Cart.scss';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      checkedList: [],
      totalPrice: 0,
      totalItemQuantity: 0,
      isAllChecked: true,
    };
  }

  componentDidMount() {
    this.getCartData();
  }

  handleCheckBox = props => {
    let itemIndex = props;
    const { checkedList } = this.state;
    this.setState({
      checkedList: checkedList.map((item, index) => {
        if (index === itemIndex) {
          item = !item;
        }
        return item;
      }),
    });
  };

  getCartData = () => {
    fetch('http://10.58.6.179:8000/orders', {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data.cart_items,
          totalPrice: Math.floor(
            Number(data.total_product_price.product__price__sum)
          ),
          checkedList: new Array(data.cart_items.length).fill(false),
          totalItemQuantity: data.cart_items.length,
        });
      });
  };

  handleSelectAll = () => {
    const { checkedList, isAllChecked } = this.setState;
    const tmpArr = checkedList.map(item => {
      item = isAllChecked ? false : true;
      return item;
    });
    this.setState({
      checkedList: tmpArr,
      isAllChecked: !isAllChecked,
    });
  };

  handleDelectBtn = () => {
    const { checkedList } = this.state;
    const checkedDelect = checkedList.filter(
      checkedList => checkedList.value === 'true'
    );
    this.setState({
      checkedList: checkedDelect,
    });
  };

  buyAlert() {
    alert('구매완료!');
  }

  render() {
    const { cartList, checkedList, cartData, totalPrice, totalItemQuantity } =
      this.state;

    return (
      <div className="cart">
        <div className="cartContainer">
          <div className="productListTitle">
            <span>구매내역</span>
          </div>
          <div className="deleteBtn">
            <button
              type="button"
              className="allDeletBtn"
              onClick={this.handleSelectAll}
            >
              전체선택
            </button>
            <button
              type="button"
              className="goDeletBtn"
              onClick={this.handleDelectBtn}
            >
              삭제
            </button>
          </div>

          {cartList.length === 0 && (
            <div className="cartEmptyBox">
              <div className="cartEmptyBoxText">
                <img
                  className="infoMarkImg"
                  src="https://www.welaaa.com/static/images/icons/info.svg"
                  alt="정보사진"
                />
                <span className="cartEmptyText">
                  장바구니에 담은 콘텐츠가 없습니다.
                </span>
              </div>
            </div>
          )}

          {cartList &&
            cartList.map((cartData, idx) => {
              return (
                <CartList
                  key={cartData.product_id}
                  product_id={cartData.product_id}
                  user_id={cartData.user_id}
                  product_list={cartData.product_list}
                  checkedList={checkedList}
                  handleCheckBox={this.handleCheckBox}
                  handleDelectBtn={this.handleDelectBtn}
                />
              );
            })}
          <CartTotal total={totalPrice} totalItemQuantity={totalItemQuantity} />
          <div className="CartPaymentForms">
            <span className="paymentText">
              결제수단
              <span className="starMark">*</span>
            </span>
          </div>
          <CartPayment />
          <CartCheck
            key={cartList.id}
            cartList={cartList}
            cartData={cartData}
          />
          <ul className="noticeText">
            <li className="adioText">
              - 오디오북은 문화비 소득 공제 대상이며, 문화비 소득 공제를 위하여
              오디오북과 클래스는 한 번에 결제 할 수 없습니다.
            </li>
            <li className="csText">
              - 결제 문의는 [마이윌라 {'>'} 1:1문의]를 이용해주세요.
            </li>
          </ul>
          <div className="buyButton">
            <button
              type="button"
              className="buyBtn"
              cartList={cartList}
              onClick={this.buyAlert}
            >
              구매하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
