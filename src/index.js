import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; 
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails 
                    author="Sita"
                    timeAgo="Today at 6:00PM" 
                    comment="Wow this is Amazing!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>       
                <CommentDetails 
                    author="Musi" 
                    timeAgo="Today at 4:00PM" 
                    comment="Nice Post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>          
                <CommentDetails 
                    author="Jamuna" 
                    timeAgo="Today at 3:30Pm" 
                    comment="Beautiful!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>           
                <CommentDetails 
                    author="Pinki" 
                    timeAgo="Today at 1:45Pm" 
                    comment="Wow! Awsome post!"
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>          
                <CommentDetails 
                    author="Sweeti" 
                    timeAgo="Yesturday at 2:00PM" 
                    comment="You are really nice thanks for this post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>           
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
