import React from 'react';
import './Review.css';

const Review = (props) => {
    const {feedback, name}= props;
    return (
        <div className='review'>
            <p>{feedback}</p>
            <h3>{name}</h3>
        </div>
    );
};

export default Review;