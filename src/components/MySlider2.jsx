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
     <h2>MEET THE TEAM </h2>
       
      <Slider {...settings}>

      <div className='member_card_lg' >
            <div className='member_photo' id='mem1'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='member_card'>
            <div className='member_photo' id='mem2'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='member_card_lg'>
            <div className='member_photo' id='mem3'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>

          

          <div className='member_card_lg' >
            <div className='member_photo' id='mem1'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='member_card'>
            <div className='member_photo' id='mem2'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='member_card_lg'>
            <div className='member_photo' id='mem3'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>


        {/* <div>   
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
        </div> */}
      </Slider>
    </div>
      </div>
    )
  }
  
  export default MySlider
