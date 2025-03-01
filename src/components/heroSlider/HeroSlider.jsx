'use client'
import React, { useState, useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import "./HeroSlider.scss";
import Phone from "@/assets/images/phone.jpg";
import Avatar from "@/assets/images/avatar-2.jpg";
import Ball from "@/assets/images/ball.jpg";
import Book from "@/assets/images/book.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HeroSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null); // Create a reference for the Slider instance

  const settings = {
    dots: true,
    fade: true,
    arrow:false,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  const articles = [
    {
      image: Phone,
      title: "Some sports that will be affected by big-data advances",
      content: "The world of sports is not immune to the rapid advancements in technology",
      author: "Adriana Martins",
      date: "October 21, 2023",
    },
    {
      image: Ball,
      title: "How technology is shaping the future of education",
      content: "New advancements are making education accessible to more people globally.",
      author: "Adriana Martins",
      date: "October 22, 2023",
    },
    {
      image: Book,
      title: "AI's impact on the healthcare industry",
      content: "AI is revolutionizing how we approach diagnostics and treatments.",
      author: "Adriana Martins",
      date: "October 23, 2023",
    },
  ];

  const handleHover = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };
  return (
    <div className="section-slider">
          <div className="section-slider-image">
            <Slider {...settings} ref={sliderRef}>
              {articles.map((article, index) => (
                <div className="item-image" key={index}>
                  <Image src={article.image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="section-slider-content">
            {articles.map((article, index) => (
              <article
                key={index}
                className={`item ${activeSlide === index ? "active" : ""}`}
                onMouseEnter={() => handleHover(index)} 
              >
                <span className="count">{index + 1}</span>
                <h2><Link href="/" className="hover">{article.title}</Link></h2>
                <div className="article-content">
                  <p>{article.content}</p>
                  <div className="meta">
                    <Link href="/" className="author-bio">
                      <span className="img">
                        <Image src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>{article.author}</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      {article.date}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
  )
}

export default HeroSlider
