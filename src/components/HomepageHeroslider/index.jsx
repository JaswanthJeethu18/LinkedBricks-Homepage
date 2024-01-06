import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Img, Text } from "components";

const HomepageHeroslider = (props) => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "25px", // Adjust this value as needed
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "white", // Set to white for visibility
          borderRadius: "50%", // Make the dots round
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    ),
  };

  return (
    <>
      <div className={props.className} style={{ marginTop: "0px" }}>
        {/* Text Overlay */}
        <div className="absolute z-10 backdrop-opacity-[0.5] bg-black-900_7e blur-[200.00px] flex flex-col items-center justify-end left-[0] p-[17px] top-[0] w-[63%]">
          <div className="flex flex-col gap-5 items-start justify-center max-w-[709px] mt-[141px] w-full">
            <Text
              className="leading-[88.00px] max-w-[709px] md:max-w-full md:text-5xl text-[80px] text-white-A700"
              size="txtLeagueSpartanExtraBold80"
            >
              {props?.languagetext}
            </Text>
            <Text
              className="leading-[35.00px] max-w-[709px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtLeagueSpartanSemiBold32"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
        <Slider {...settings} className="relative w-full">
          <div>
            <Img
              className="h-[582px] object-cover rounded-bl-[20px] rounded-br-[20px] w-full m-0"
              src="images/img_rectangle34624572.png"
              alt="rectangle346245"
            />
          </div>
          <div>
            <Img
              className="h-[582px] object-cover rounded-bl-[20px] rounded-br-[20px] w-full m-0"
              src="images/img_rectangle34624572.png"
              alt="second-image-alt"
            />
          </div>
          <div>
            <Img
              className="h-[582px] object-cover rounded-bl-[20px] rounded-br-[20px] w-full m-0"
              src="images/img_rectangle34624572.png"
              alt="third-image-alt"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

HomepageHeroslider.defaultProps = {
  languagetext: "Discover Your Dream Home",
  descriptiontext:
    "Your one-stop real estate destination for buying, renting, and selling properties.",
};

export default HomepageHeroslider;
