import React, { useState } from 'react';
import './video.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Items = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ padding: `5 ${chevronWidth}px`, padding:"5%" }}>
     <Slider {...settings}>
        {/* card1  */}
        <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
          {/* card1  */}
          <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
      
        {/* card1  */}
        <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
      
        {/* card1  */}
        <div className="blog">
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
      
        {/* card1  */}
        <div className="blog" >
  
  <div className="title-box">
    <h3>
    SPRING FEVER
    </h3>
    <hr/>
    <div className="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div className="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>03.12.2015</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
       
</Slider >
    </div>
  );
};
export default Items;