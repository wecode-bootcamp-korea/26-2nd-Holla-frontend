import React, { Component } from 'react';
import './DetailNewModal.scss';

export class DetailNewModal extends Component {
  render() {
    const { goToCart, toggleCartModal, modalRef } = this.props;
    return (
      <div className="goToCartWrapper">
        <div className="goToCart" ref={modalRef}>
          <div className="modalTitle">안내</div>
          <div className="modalCommentWrapper">
            <p className="modalComment">장바구니에 추가되었습니다.</p>
            <p className="modalComment">이동하겠습니까? </p>
          </div>
          <div className="modalButton">
            <button
              className="cancleButton"
              type="button"
              onClick={toggleCartModal}
            >
              취소
            </button>
            <button className="confirmButton" type="button" onClick={goToCart}>
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailNewModal;
