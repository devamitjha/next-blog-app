import React from 'react';
import shapre1 from "@/assets/images/banner-shape-1.png"
import object1 from "@/assets/images/object-3d-1.png" 
import object2 from "@/assets/images/object-3d-2.png"
import "./BackgroundShapes.scss";

const BackgroundShapes = () => {
  return (
    <div className="background-shapes">
        <div className="shape-1 common-shape">
            <img src={shapre1} alt="banner-shape-1"/>
        </div>
        <div className="shape-2 common-shape">
            <img src={shapre1} alt="banner-shape-2"/>
        </div>
        <div className="threed-shape-1 move-with-cursor">
            <img src={object1} alt="object-3d-1"/>
        </div>
        <div className="threed-shape-2 move-with-cursor">
            <img src={object2} alt="object-3d-2"/>
        </div>
    </div>
  )
}

export default BackgroundShapes