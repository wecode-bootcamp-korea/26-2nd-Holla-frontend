import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import './DetailReviewStar.scss';

export class DetailReviewStar extends Component {
  render() {
    const { clickStar, handleReviewStars } = this.props;
    return (
      <div>
        <FaStar
          className={`${clickStar >= 1 ? 'green' : 'grey'}`}
          size="35px"
          onClick={() => handleReviewStars(1)}
        />
        <FaStar
          className={`${clickStar >= 2 ? 'green' : 'grey'}`}
          size="35px"
          onClick={() => handleReviewStars(2)}
        />
        <FaStar
          className={`${clickStar >= 3 ? 'green' : 'grey'}`}
          size="35px"
          onClick={() => handleReviewStars(3)}
        />
        <FaStar
          className={`${clickStar >= 4 ? 'green' : 'grey'}`}
          size="35px"
          onClick={() => handleReviewStars(4)}
        />
        <FaStar
          className={`${clickStar === 5 ? 'green' : 'grey'}`}
          size="35px"
          onClick={() => handleReviewStars(5)}
        />
      </div>
    );
  }
}

export default DetailReviewStar;
