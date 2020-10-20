import React from 'react';
import './question.style.css';
import Option from '../option/Option';

const Question = ({question, author, options, answer}) =>(
    <div>
        <h3>{question}</h3>
        <Option />
    </div>
);



export default Question;