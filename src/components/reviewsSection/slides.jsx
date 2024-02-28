import React from 'react';
import './reviewsSection.css';

const Slide = ({ color, alt, isActive, title, content, children }) => {
    const classNames = isActive
        ? "flex flex-col justify-center items-center w-full h-64 transition-opacity duration-700 ease-in-out opacity-100"
        : "flex flex-col justify-center items-center w-full h-64 transition-opacity duration-700 ease-in-out opacity-0 absolute";

    return (
        <div className={classNames + " carouselSlide"} style={{ backgroundColor: color, zIndex: isActive ? 1 : -1 }}>
            <h1 className="text-white text-4xl underline-title">{title}</h1>
            <h2 className="text-white text-4xl font-bold p-5">{content}</h2>
            {children}
        </div>
    );
};

export default Slide;
