import './MySlider.css'
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}




function MySlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow/>,
    prevArrow: <Arrow/>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          
        }
      }
    ]
  };
  
    return (
    
    <div className='slider_cover'>
       <div className="slider-container">

       
      <Slider {...settings}>

     
        <div>
         <img src="/Images/pic1.jpg" alt="" className='carausel-images' />
        </div>
        <div>
        <img src="/Images/pic2.jpg" alt="" className='carausel-images' />
        </div>
        <div>
        <img src="/Images/pic3.jpg" alt="" className='carausel-images'  />
        </div>
        <div>
        <img src="/Images/pic1.jpg" alt="" className='carausel-images' />
        </div>
        <div>
        <img src="/Images/pic2.jpg" alt="" className='carausel-images'  />
        </div>
        <div>
        <img src="/Images/pic3.jpg" alt="" className='carausel-images'  />
        </div>
      </Slider>
    </div>
      </div>
    )
  }
  
  export default MySlider
