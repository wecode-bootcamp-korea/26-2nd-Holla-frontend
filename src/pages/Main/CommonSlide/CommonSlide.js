import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CommonSlide.scss';

export class CommonSlide extends Component {
  render() {
    const {
      title,
      settings,
      slideData,
      containerName,
      recommend,
      mock,
      history,
      userInfo,
    } = this.props;

    return (
      <div className={containerName}>
        <div className="wrapper">
          {recommend && <h2>{userInfo}님!</h2>}
          <h2>{title}</h2>
          <div className="inner">
            <Slider {...settings}>
              {slideData &&
                slideData.map((data, index) => {
                  return (
                    <div
                      className="slideCard"
                      key={index}
                      onClick={() => history.push(`/DetailPage/${data.id}`)}
                    >
                      <img
                        src={data.product_images}
                        alt={`${data.id}번 이미지`}
                        className="cardImg"
                      />
                      {recommend || mock ? (
                        <div className="productIntro">{data.intro}</div>
                      ) : (
                        <div className="realTimeSlideRight">
                          <div className="realTimeIntro">{data.text}</div>
                          <div className="realTimeName">{data.name}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CommonSlide);
