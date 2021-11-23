import React, { Component } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import './CardSlide.scss';

export class CardSlide extends Component {
  constructor() {
    super();
    this.state = {
      goToSlide: 0,
      offsetRadius: 4,
      showNavigation: true,
      config: config.gentle,
    };
  }
  render() {
    const { slideData } = this.props;
    return (
      <div className="CardSlideContainer">
        <div className="wrapper">
          <h2>이달의 오디오북</h2>
        </div>
        <div className="inner">
          {slideData &&
            slideData.map((data, index) => {
              return (
                <div
                  className="card"
                  key={index}
                  onClick={() =>
                    this.props.history.push(`/DetailPage/${this.props.id}`)
                  }
                >
                  <div className="cardSlidedate">{data.date}</div>
                  <div className="cardLeft">
                    <img
                      src={data.product_url}
                      alt={`${data.id}번 이미지`}
                      className="cardImg"
                    />
                    <div className="bookTitle">{data.title}</div>
                    <div className="cardLeftDown">
                      <div className="authorImage">{data.author_image}</div>
                      <div className="author">{data.author}</div>
                    </div>
                  </div>
                  <div className="cardRight">
                    <img
                      src={data.product_url}
                      alt={`${data.id}번 이미지`}
                      className="cardImg"
                    />
                    <div className="bookTitle">{data.title}</div>
                    <div className="cardLeftDown">
                      <div className="authorImage">{data.author_image}</div>
                      <div className="author">{data.author}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default CardSlide;
