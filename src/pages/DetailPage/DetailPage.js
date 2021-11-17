import React, { Component } from 'react';
import { GrCirclePlay } from 'react-icons/gr';
import { FaStar } from 'react-icons/fa';
import { DetailNewModal } from './DetailNewModal/DetailNewModal';
import { DetailIntro } from './DetailIntro/DetailIntro';
import { DetailReviewStar } from './DetailReviewStar/DetailReviewStar';
import './DetailPage.scss';
import ViewMore from './ViewMore/ViewMore';
import DetailComment from './DetailComment/DetailComment';

export class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToCartModal: false,
      detailData: {},
      reviewData: {},
      clickStar: 5,
      comments: [],
      commentInput: '',
      isAdded: false,
    };
    this.modalRef = React.createRef();
  }

  formattingNumber = price => {
    return Number(price).toLocaleString('en-US');
  };

  toggleCartModal = () => {
    const { goToCartModal } = this.state;
    this.setState({
      goToCartModal: !goToCartModal,
    });
  };

  clickModalOutside = e => {
    const condition =
      this.modalRef.current && !this.modalRef.current.contains(e.target);
    if (condition) {
      this.setState({
        goToCartModal: false,
      });
    }
  };

  goToCart = () => {
    const { history } = this.props;
    fetch('http://10.58.6.179:8000/orders', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({ product_id: this.props.match.params.id }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          history.push('/Cart');
        }
      });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://10.58.6.179:8000/products/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          detailData: res.product[0],
        });
      });

    fetch(`http://10.58.6.179:8000/reviews/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          reviewData: res.result,
          comments: res.result.reviews,
        });
      });

    document.addEventListener('mousedown', this.clickModalOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickModalOutside);
  }

  handleReviewStars = number => {
    this.setState({ clickStar: number });
  };

  updateCommentInput = e => {
    const { value } = e.target;
    this.setState({
      commentInput: value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { comments, commentInput, clickStar, isAdded } = this.state;

    fetch(`http://10.58.6.179:8000/reviews/${this.props.match.params.id}`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        product_id: this.props.match.params.id,
        rating: clickStar,
        text: commentInput,
      }),
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          comments: [commentInput, ...comments],
          commentInput: '',
          isAdded: true,
        });
        window.location.reload(true);
      });
  };

  deleteCommentButton = id => {
    fetch(`http://10.58.6.179:8000/reviews/${this.props.match.params.id}`, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: [],
          isAdded: false,
        });
        window.location.reload(true);
      });
  };

  render() {
    const {
      goToCartModal,
      detailData,
      reviewData,
      clickStar,
      comments,
      commentInput,
      isAdded,
    } = this.state;
    const { image_url, intro, title, price, description, author } = detailData;
    const { total_reviews, avg_rating, reviews } = reviewData;
    const isActiveButton = isAdded ? false : true;
    return (
      <main className="detailPage">
        <div className="detailWrapper">
          <section className="detailAudioBanner">
            <div className="thumbnail">
              <GrCirclePlay className="thumbnailPlayButton" />
              <img className="thumbnailImg" alt="Book cover" src={image_url} />
            </div>
            <div className="info">
              <div className="titleBox">
                <p className="headline">{intro}</p>
                <p className="title">{title}</p>
              </div>
              <button
                className="purchaseButton"
                type="button"
                onClick={this.toggleCartModal}
              >
                <div className="greenText">구매</div>
                <div className="price">₩{this.formattingNumber(price)}</div>
              </button>
            </div>
          </section>
          <section className="detailContent">
            <div className="contentTabNav">
              <span className="tabLeftText">도서 정보</span>
              <span className="contentTabBorder" />
              <span className="tabRightText">목차</span>
            </div>
            <DetailIntro bookDescription={description} />
            <DetailIntro author={author} />
            <section className="evaluationAndReview">
              <div className="evaluation">
                <div className="evaluationTitleBox">
                  <span className="evaluationTitle">오디오북 별점</span>
                  <span className="countComment">{total_reviews}개의 톡</span>
                </div>
                <div className="evaluationInfo">
                  {[1, 2, 3, 4, 5].map(star => {
                    let isFilled = Math.floor(avg_rating) >= star;
                    return (
                      <FaStar
                        className={`starIcon ${isFilled && 'starIconFill'}`}
                      />
                    );
                  })}
                  <div className="rates">
                    <span className="averageRate">{avg_rating}</span>
                    &nbsp;/&nbsp;5.0
                  </div>
                </div>
              </div>
              <div className="reviewCommentWrapper">
                <p className="reviewComment">오디오북 내용은 어떠셨나요?</p>
                <p className="reviewComment">평점을 남겨주세요.</p>
              </div>
              <div className="reviewRating">
                <DetailReviewStar
                  reviews={reviews}
                  handleReviewStars={this.handleReviewStars}
                  clickStar={clickStar}
                />
              </div>
              <div className="reviewInput">
                <textarea
                  className="reviewInputArea"
                  type="text"
                  name="input"
                  value={commentInput}
                  onChange={this.updateCommentInput}
                />
                <button
                  type="button"
                  onClick={this.addComment}
                  className={
                    !isActiveButton ? 'changeButtonColor' : 'reveiwSubmitButton'
                  }
                  // disabled={!isActiveButton}
                >
                  등록
                </button>
              </div>
              <div className="review">
                <p className="reviewListTitle">오디오북 톡 남기기</p>
                <ul className="reviewList">
                  {comments.map((comment, index) => {
                    return (
                      <DetailComment
                        key={index}
                        comment={comment}
                        deleteCommentButton={this.deleteCommentButton}
                      />
                    );
                  })}
                </ul>
                <ViewMore />
              </div>
            </section>
          </section>
        </div>
        {goToCartModal && (
          <DetailNewModal
            goToCart={this.goToCart}
            toggleCartModal={this.toggleCartModal}
            modalRef={this.modalRef}
          />
        )}
      </main>
    );
  }
}

export default DetailPage;
