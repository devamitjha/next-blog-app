import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "./FeaturePost.scss";
import Thumb from "@/assets/images/cat-color-small.jpg"

const FeaturePost = ({date}) => {
  return (
    <div className="article">
        <div className="thumb">
            <Image src={Thumb} alt="thumb"/>
        </div>
        <div className="details">
        <h4><Link href="#" className="hover">Animals that captivate people with their intelligence</Link></h4>
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
  )
}

export default FeaturePost
