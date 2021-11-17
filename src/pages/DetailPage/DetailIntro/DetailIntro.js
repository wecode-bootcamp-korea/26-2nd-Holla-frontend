import React, { Component } from 'react';
import ViewMore from '../ViewMore/ViewMore';
import './DetailIntro.scss';

export class DetailIntro extends Component {
  render() {
    const { bookDescription, author } = this.props;
    return (
      <div className="DetailIntro">
        {bookDescription && (
          <>
            <div className="introTitle">오디오북 소개</div>
            <div className="introInfo">{bookDescription}</div>
          </>
        )}
        {author && (
          <>
            <div className="introTitle">저자 소개</div>
            <div className="authorProfile">
              <img
                className="profileImg"
                alt="Default Profile"
                src={author.profile_url}
              />
              <p className="authorName">{author.name}</p>
            </div>
            <div className="introInfo">{author.introduction}</div>
          </>
        )}
        <ViewMore />
      </div>
    );
  }
}

export default DetailIntro;
