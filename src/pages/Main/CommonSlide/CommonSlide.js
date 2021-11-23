import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CommonSlide.scss';

export class CommonSlide extends Component {
  render() {
    const { title, settings, slideData, containerName, recommend } = this.props;
    return (
      <div className={containerName}>
        <div className="wrapper">
          {recommend && <h2>정지후님!</h2>}
          <h2>{title}</h2>
          <div className="inner">
            <Slider {...settings}>
              {slideData &&
                slideData.map((data, index) => {
                  return (
                    <div
                      className="slideCard"
                      key={index}
                      onClick={() =>
                        this.props.history.push(`/DetailPage/${this.props.id}`)
                      }
                    >
                      <img
                        src={data.product_url}
                        alt={`${data.id}번 이미지`}
                        className="cardImg"
                      />
                      {recommend ? (
                        <div className="productIntro">{data.intro}</div>
                      ) : (
                        <div className="realTimeSlideRight">
                          <div className="realTimeIntro">
                            {data.review_text}
                          </div>
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
