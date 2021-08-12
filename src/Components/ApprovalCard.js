import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const ApprovalCard = () => {
    return (


        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <CommentDetail 
                        author="Halil Kalkavan"
                        TimeAgo="Today at 4:44AM"
                        Content="You are a bad girl"
                        avatar={faker.image.avatar()}
                    />
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;