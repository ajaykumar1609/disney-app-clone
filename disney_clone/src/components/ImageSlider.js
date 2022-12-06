import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;
const Carousel = styled(Slider)`
  margin-top: 15px;
  ul li button{
    &:before{
        font-size: 10px;
        color: white;
    }
  }
  li.slick-active button::before{
    color:white;
  }
  .slick-list {
    overflow: visible;
  }
  button{
    z-index: 1;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(250, 250, 250, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(250, 250, 250, 0.09) 0px -3px 5px;
    cursor: pointer; 
    transition:400ms;
`;
const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transition: 300ms;
    &:hover{
        border: 4px solid rgba(250,250,250,0.9)
    }
  }
  
  }
`;
