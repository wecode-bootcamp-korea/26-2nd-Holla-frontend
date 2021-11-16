import React, { Component } from 'react';
import { BANNERIMG } from './bannerSlideDate.js';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './BannerSlide.scss';

const slideWidth = 1200;
const offsetX = 360;

export class BannerSlide extends Component {
  constructor() {
    super();
    this.state = {
      slidePosition: -slideWidth,
    };
  }

  prevSlide = () => {
    const { slidePosition } = this.state;
    if (slidePosition < 0) {
      this.setState({
        slidePosition: slidePosition + slideWidth,
      });
    } else if (slidePosition === 0) {
      this.setState({
        slidePosition: -slideWidth * 6,
      });
    }
  };

  nextSlide = () => {
    const { slidePosition } = this.state;
    if (slidePosition > -slideWidth * 6) {
      this.setState({
        slidePosition: slidePosition - slideWidth,
      });
    } else if (slidePosition === -slideWidth * 6) {
      this.setState({
        slidePosition: 0,
      });
    }
  };

  render() {
    const { slidePosition } = this.state;

    return (
      <div className="bannerSlide">
        <div className="bannerSlideWrapper">
          <div
            className="bannerSlideInner"
            style={{
              transform: `translateX(${slidePosition + offsetX}px)`,
            }}
          >
            {BANNERIMG.map((slide, index) => {
              return (
                <img
                  className="slideImg"
                  src={slide.image}
                  alt="Main Banner Slide"
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <button className="bannerLeftButton" onClick={this.prevSlide}>
          <FaAngleLeft className="slideLeftButton" />
        </button>
        <button className="bannerRightButton" onClick={this.nextSlide}>
          <FaAngleRight className="slideRightButton" />
        </button>
      </div>
    );
  }
}

export default BannerSlide;
