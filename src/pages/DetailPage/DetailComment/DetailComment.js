import React, { Component } from 'react';
import './DetailComment.scss';

export class DetailComment extends Component {
  transferIdValue = () => {
    const { comments, deleteCommentButton } = this.props;
    deleteCommentButton(comments.id);
  };

  render() {
    const { comment, deleteCommentButton } = this.props;
    return (
      <li>
        {comment && (
          <>
            <div className="reviewHeadline">
              <span className="reviewHeadlineName">{comment.name}</span>
              <span className="reviewHeadlineDate">{comment.date}</span>
              <button
                className="deleteCommentButton"
                onClick={() => deleteCommentButton(comment.id)}
              >
                삭제
              </button>
            </div>
            <div className="reviewContent">{comment.text}</div>
          </>
        )}
      </li>
    );
  }
}

export default DetailComment;
