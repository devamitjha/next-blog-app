import BlogSidebar from "@/components/blogSidebar/BlogSidebar";
import BlogList from "@/components/blogList/BlogList";
import HeroSlider from "@/components/heroSlider/HeroSlider";
import HomeWave from "@/components/homeWave/HomeWave";
import TitleDecoration from "@/components/titleDecoration/TitleDecoration";
import "./Page.scss";

export default function Home() {
  return (
    <div className="section">
       <div className="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
          <HomeWave/>
        </div>
       <div className="container mt-50">        
          <HeroSlider/>
          <div className="content-wrapper">
            <TitleDecoration title="Latest Articles" size="big"/>
            <div className="section-blog-post">
              <div className="section-blog-list">
                <BlogList/>
              </div>
              <BlogSidebar/>       
            </div>
          </div>
        </div>
    </div>
  );
}
