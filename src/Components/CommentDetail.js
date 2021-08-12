import React from 'react';

const CommentDetail = props => {
    // console.log(props);
    return(
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <div className="comment">
                <a className="avatar" href="/#" >
                    <img src={props.avatar} alt='test'/>
                </a>
            <div className="content">
                <a className="author" href="/#">Matt</a>
                <div className="metadata">
                <span className="date">{props.TimeAgo}</span>
                </div>
                <div className="text">
                {props.Content}
                </div>
                <div className="actions">
                <a className="reply" href="/#">Reply</a>
                </div>
            </div>
            </div>
        </div>
     
    );
};

export default CommentDetail;