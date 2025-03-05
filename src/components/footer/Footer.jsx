import React from 'react';
import "./Footer.scss";
import Link from 'next/link';
import Image from 'next/image';
import TitleDecoration from '../titleDecoration/TitleDecoration';
import FeaturePost from '../featurePost/FeaturePost';
import svgImg from "@/assets/images/paper.svg";

const Footer = () => {
  return (
    <div className="container full-width footer-container"> 
      <div className="shape">
        <Image className="svg" src={svgImg} alt="paper design"/>
        </div>
      <div className="container relative">
        <div className="section-footer">
          <div className="item section-newsletter">
            <TitleDecoration title="DA" size="big"/>
            <div className="item-content">
              <p>A super modern theme following the latest trends with premium Membership and fully compatible with Ghost.</p>
              <p>Check more themes like this on <Link href="/"><strong>da.com</strong></Link></p>
            </div>
            <div className="footer-input">
              <form>
                <div className="form-group">
                  <input type="email" name="email" className="inputbox large" required="" placeholder="Enter your email address" />
                  <div className="btn filled submit">
                      Get Started<span className="loader"></span>
                  </div>
                </div>
              </form>
            </div>
            <div className="item-content">
              <p>Don't miss out and sign up to <strong>our newsletter!</strong></p>
            </div>
          </div>
          <div className="item quick-links">
            <TitleDecoration title="Quick Links" size="big"/>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Author</Link></li>
              <li><Link href="/">Contact</Link></li>
              <li><Link href="/">Search</Link></li>
            </ul>
          </div>
          <div className="item latest-article">
            <TitleDecoration title="Latest Articles" size="big"/>
            <div className="meta">
              <FeaturePost date={true}/>
              <FeaturePost date={true}/>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Theme by<span className="dot"></span><strong>DA</strong></p>
        </div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  )
}

export default Footer
