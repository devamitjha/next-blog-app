"use client";

import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./BlogSidebar.scss";
import Avatar from "@/assets/images/avatar-2.jpg";
import TitleDecoration from "../titleDecoration/TitleDecoration";
import FeaturePost from "../featurePost/FeaturePost";
import CategorySlider from "../categorySlider/CategorySlider";

const StickyBox = dynamic(() => import("react-sticky-box"), { ssr: false });

const BlogSidebar = () => {
  return (
    <StickyBox offsetTop={20} offsetBottom={20} className="section-blog-sidebar">
      <div style={{ width: "100%" }}>
        <div className="widget about">
          <TitleDecoration title="About Me" size="small" />
          <div className="meta">
            <span className="avatar">
              <Image src={Avatar} alt="author" />
            </span>
            <div className="author-name">
              <h4>
                <Link href="/" className="hover">
                  Adriana Martins
                </Link>
              </h4>
              <span>India</span>
            </div>
          </div>
          <div className="bio">
            <p>
              Hello! My name is Adriana Martins working from Chile. I create some Ghost and
              Wordpress themes for different markets, also, I offer live support via our
              ticket system.
            </p>
          </div>
        </div>
        <div className="widget social">
          <TitleDecoration title="Social Profiles" size="small" />
          <div className="meta">
            <Link href="/" className="item">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link href="/" className="item">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link href="/" className="item">
              <i className="fa fa-dribbble"></i>
            </Link>
          </div>
        </div>
        <div className="widget featured">
          <TitleDecoration title="Featured Articles" size="small" />
          <div className="meta">
            <FeaturePost />
            <FeaturePost />
          </div>
        </div>
        <div className="widget categories">
          <TitleDecoration title="Categories" size="small" />
          <CategorySlider />
        </div>
      </div>
    </StickyBox>
  );
};

export default BlogSidebar;
