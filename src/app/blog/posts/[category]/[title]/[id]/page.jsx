import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import BlogSidebar from '@/components/blogSidebar/BlogSidebar';
import SampleImage from "@/assets/images/avatar-3.jpg";
import Avatar from "@/assets/images/avatar.jpg";
import TitleDecoration from '@/components/titleDecoration/TitleDecoration';
import FeaturePost from '@/components/featurePost/FeaturePost';
import HomeWave from '@/components/homeWave/HomeWave';
import "./SinglePost.scss"

export const metadata = {
  title: "Single Post Page",
  description: "Single Post Page",
};

const AuthorCard = ()=>{  
  return(
    <div className="author-card">
      <div className="author-avatar">
        <Image src={SampleImage} alt="author name"/>
      </div>      
      <div className="bio">
        <span>Written By</span>
        <h3>Adriana Martins </h3>
        <p>Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
        <div className="btn filled viewAll">View All Posts</div>
      </div>
    </div>
  )
}
const notUser = ()=>{
  return(
      <div className="is-user">
        <h2>Start the conversation</h2>
        <p>Become a member of <strong>DA</strong> to start commenting.</p>
        <div className="btn filled signup">Sign up now</div>
        <span>Already a member? <Link to="/login">Sign in</Link></span>
      </div>
  )
}
const isUser = (id)=>{
  return(
    <div className="conment-input">
      <h3>Responses (10)</h3>
      <form className="comment-form" action="#">
        <textarea className="input-textarea" rows="4" placeholder="Add to discussion" required=""/>
        <div className="btn-group">
          <div className="btn filled">Submit</div>
          <div className="btn outline">Cancel</div>
        </div>
      </form>
    </div>
  )
}

const Post = () => {
  return (
    <div className="content-wrapper post-detail-page">   
    <div className="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
      <HomeWave/>
    </div>   
    <div className="container">
      <div className="section-post-title">
        <div className="post-title-container">
          <div className="category-name">
            <h6>Artificial Intelligence</h6>
          </div>
          <h2>Modern and colorful style of caricatures created by AI</h2>
          <div className="section-author">
            <div className="meta">
              <Link href="/" className="author-bio">
                <span className="img">
                  <Image src={Avatar} alt="Author" />
                </span>
                <span className="author-name">
                  <p>By <span>Author Name</span></p>
                  <time className="time">
                    <span className="dot"></span>
                    October 21, 2023
                  </time>
                </span>
              </Link>
             
            </div>
            <div className="social">
              <div className="icon-box value">
                <i className="fa fa-heart-o"></i>
                <span>40</span>
              </div>
              <div className="icon-box value">
                <i className="fa fa-comment-o"></i>
                <span>20</span>
              </div>
              <div className="icon-box">
                <i className="fa fa-bookmark-o"></i>
              </div>
              <div className="icon-box">
                <i className="fa fa-share-square-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-blog-post">
        <div className="section-blog-list">
          <div className="post-feature-image">
            <Image src={SampleImage} alt="Post Details"/>              
          </div>
          <div className="post-text">
            <p>Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricatures has witnessed a modern and colorful transformation.</p>
            <p>AI-powered tools and algorithms have redefined caricature creation in novel and exciting ways.</p>
            <p>AI-driven caricature creation represents a digital revolution. Artists and enthusiasts now have access to sophisticated tools that can generate caricatures with remarkable precision, bringing fresh life to this traditional art form.</p>
            <p>Caricatures produced by AI incorporate intricate details and vivid colors, pushing the boundaries of what's possible in caricature art.</p>
          </div>
          <div className="section-tags">
            <ul>
              <li><Link href="#">AI</Link></li>
              <li><Link href="#">Development</Link></li>
              <li><Link href="#">UI Design</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Business</Link></li>
            </ul>
          </div>
          <div className="post-author">
            <TitleDecoration title="About the Author" size="big"/>
            {AuthorCard()}
          </div>
          <div className="related-article">
            <TitleDecoration title="Related Articles" size="big"/>
            <div className="meta">
              <FeaturePost date={true}/>
              <FeaturePost date={true}/>
            </div>
          </div>
          <div className="post-comment">
            comment 
          </div>
        </div>
        <BlogSidebar/>       
      </div>
    </div>
  </div>
  )
}

export default Post
