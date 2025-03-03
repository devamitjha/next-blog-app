import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./FeatureSlider.scss";
import Thumb from "@/assets/images/cat-color-small.jpg"

import {Pagination } from 'swiper/modules';

const FeatureSlider = ({date}) => {
  return (
    <div className="posts-content related">
        <div className="related-list">
            <Swiper
               slidesPerView={'auto'}
               spaceBetween={10}
               modules={[Pagination]}
               className="mySwiper"
            >
                 <SwiperSlide>
                    <div className="article">
                        <div className="thumb">
                            <img src={Thumb} alt="thumb"/>
                        </div>
                        <div className="details">
                        <h4><Link to="#" className="hover">Animals that captivate people with their intelligence</Link></h4>
                        {
                            date ? 
                                <div className="featured-date">
                                    <div className="dot"></div>
                                    <span>Oct 21, 2023</span>
                                </div>
                            :
                                <div className="author">
                                    <div className="dot"></div>
                                    By<span>Adriana Martins</span>
                                </div>
                        }
                        
                        </div>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className="article">
                        <div className="thumb">
                            <img src={Thumb} alt="thumb"/>
                        </div>
                        <div className="details">
                        <h4><Link to="#" className="hover">Animals that captivate people with their intelligence</Link></h4>
                        {
                            date ? 
                                <div className="featured-date">
                                    <div className="dot"></div>
                                    <span>Oct 21, 2023</span>
                                </div>
                            :
                                <div className="author">
                                    <div className="dot"></div>
                                    By<span>Adriana Martins</span>
                                </div>
                        }
                        
                        </div>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className="article">
                        <div className="thumb">
                            <img src={Thumb} alt="thumb"/>
                        </div>
                        <div className="details">
                        <h4><Link to="#" className="hover">Animals that captivate people with their intelligence</Link></h4>
                        {
                            date ? 
                                <div className="featured-date">
                                    <div className="dot"></div>
                                    <span>Oct 21, 2023</span>
                                </div>
                            :
                                <div className="author">
                                    <div className="dot"></div>
                                    By<span>Adriana Martins</span>
                                </div>
                        }
                        
                        </div>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className="article">
                        <div className="thumb">
                            <img src={Thumb} alt="thumb"/>
                        </div>
                        <div className="details">
                        <h4><Link to="#" className="hover">Animals that captivate people with their intelligence</Link></h4>
                        {
                            date ? 
                                <div className="featured-date">
                                    <div className="dot"></div>
                                    <span>Oct 21, 2023</span>
                                </div>
                            :
                                <div className="author">
                                    <div className="dot"></div>
                                    By<span>Adriana Martins</span>
                                </div>
                        }
                        
                        </div>
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className="article">
                        <div className="thumb">
                            <img src={Thumb} alt="thumb"/>
                        </div>
                        <div className="details">
                        <h4><Link to="#" className="hover">Animals that captivate people with their intelligence</Link></h4>
                        {
                            date ? 
                                <div className="featured-date">
                                    <div className="dot"></div>
                                    <span>Oct 21, 2023</span>
                                </div>
                            :
                                <div className="author">
                                    <div className="dot"></div>
                                    By<span>Adriana Martins</span>
                                </div>
                        }
                        
                        </div>
                    </div>
                 </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default FeatureSlider