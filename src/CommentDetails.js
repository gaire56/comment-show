import React from 'react';
// import faker from 'faker'
// import ApprovalCard from './ApprovalCard'

const CommentDetails = (props) => {
    // console.log(props); // to check work or not
    return (
        <div className="comments">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
    );
};

export default CommentDetails;