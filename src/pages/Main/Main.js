import React, { Component } from 'react';
import BannerSlide from './BannerSlide/BannerSlide';
import CommonSlide from './CommonSlide/CommonSlide';
import './Main.scss';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      recommendedBooks: [],
      realTimeReview: [],
      monthBooks: [],
    };
  }

  getData = () => {
    fetch('./data/mainSlidedata.json')
      .then(res => res.json())
      .then(res => {
        const { recommend_books } = res.results;
        this.setState({
          monthBooks: recommend_books,
        });
      });

    const token = localStorage.getItem('access_token');

    token &&
      fetch('http://10.58.6.179:8000', {
        headers: {
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(res => {
          const { recommend_books, realtime_reviews, name } = res.results;
          this.setState({
            recommendedBooks: recommend_books,
            realTimeReview: realtime_reviews,
            userInfo: name,
          });
        });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { recommendedBooks, realTimeReview, monthBooks, userInfo } =
      this.state;

    return (
      <main>
        <BannerSlide />
        <CommonSlide
          title="이 달의 도서 추천북!!"
          settings={RECOMMENT_SETTING}
          slideData={monthBooks}
          containerName="recommendSlideContainer"
          mock
        />
        {localStorage.getItem('access_token') && (
          <>
            <CommonSlide
              title="좋아할 오디오북, 저희가 찾았어요!"
              settings={RECOMMENT_SETTING}
              slideData={recommendedBooks}
              containerName="recommendSlideContainer"
              recommend
              userInfo={userInfo}
            />
            <CommonSlide
              title="윌라 실시간 한줄 감상평"
              settings={REAL_TIME_SETTING}
              slideData={realTimeReview}
              containerName="realTimeSlideContainer"
            />
          </>
        )}
      </main>
    );
  }
}

export default Main;

const RECOMMENT_SETTING = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 5,
  slidesToScroll: 5,
};

const REAL_TIME_SETTING = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 9000,
};
