'use client'
import React, {useRef } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategorySlider.scss";
import CategoryImage from "@/assets/images/book.jpg";

const CategorySlider = () => {
    const sliderRef = useRef(null);
    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-small">   
        <Slider ref={sliderRef} {...settings}>         
        <div className="categories-details">
            <div className="cat-image">
            <Image src={CategoryImage} alt="category"/>
            </div>
            <div className="cat-name">
            <h2>Technology</h2>
            <div className="count">
                <span>1</span>
                <div className="dot"></div>
                <span>Article</span>
            </div>
            </div>
        </div>
        <div className="categories-details">
            <div className="cat-image">
            <Image src={CategoryImage} alt="category"/>
            </div>
            <div className="cat-name">
            <h2>Technology</h2>
            <div className="count">
                <span>1</span>
                <div className="dot"></div>
                <span>Article</span>
            </div>
            </div>
        </div>
        <div className="categories-details">
            <div className="cat-image">
            <Image src={CategoryImage} alt="category"/>
            </div>
            <div className="cat-name">
            <h2>Technology</h2>
            <div className="count">
                <span>1</span>
                <div className="dot"></div>
                <span>Article</span>
            </div>
            </div>
        </div>
        </Slider>
        <div className="slider-btn">
        <div className="btn filled left" onClick={previous}>
        <i className="fa fa-long-arrow-left"></i>
        </div>
        <div className="btn filled right" onClick={next}>
        <i className="fa fa-long-arrow-right"></i>
        </div>
        </div>
    </div>
  )
}

export default CategorySlider
