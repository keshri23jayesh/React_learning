import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="SAM" 
                    timeAgo="Today at 6:00 PM" 
                    about="Nice BLog Post"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="RAM" 
                    timeAgo="Today at 7:00 PM" 
                    about="Good Log Post"
                    avatar={faker.image.avatar()} />
             </ApprovalCard>
             <ApprovalCard>
                <CommentDetail 
                    author="JAY" 
                    timeAgo="Today at 8:00 PM" 
                    about="Really BLog Post" 
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));