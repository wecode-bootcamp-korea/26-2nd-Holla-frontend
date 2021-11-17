import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './ViewMore.scss';

export class ViewMore extends Component {
  render() {
    return (
      <button className="ViewMore" type="button">
        <span className="viewMoreText">더보기</span>
        <IoIosArrowDown className="arrowDown" size="24" />
      </button>
    );
  }
}

export default ViewMore;
