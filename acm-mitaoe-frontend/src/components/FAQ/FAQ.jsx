import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import './FAQ.css';

const FAQ = ({ question, isOpen, onClick }) => {
  return (
    <div className="accordian-container">
      <div className="question" onClick={onClick}>
        <p>{question}</p>
        <IoMdArrowDropdown className={`icon ${isOpen ? 'rotate' : ''}`} />
      </div>
      <div className={`answer ${isOpen ? 'show' : ''}`}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nobis corporis temporibus, quidem saepe exercitationem voluptatem voluptatibus neque corrupti voluptate accusantium quasi, unde odit dolore cum delectus, laboriosam quae ipsam.</p>
      </div>
    </div>
  );
};

export default FAQ;
