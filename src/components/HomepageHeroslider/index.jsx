import React from "react";

import { Img, Text } from "components";

const HomepageHeroslider = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="relative w-full">
          <Img
            className="h-[582px] m-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
            src="images/img_rectangle34624572.png"
            alt="rectangle346245"
          />
          <div className="flex flex-row items-center justify-center mb-14 mt-auto mx-auto w-auto">
            <Img className="h-6 w-6" src="images/img_mobile.svg" alt="mobile" />
            <Img
              className="h-6 w-6"
              src="images/img_contrast.svg"
              alt="contrast"
            />
            <Img
              className="h-6 w-6"
              src="images/img_contrast.svg"
              alt="contrast_One"
            />
          </div>
          <div className="absolute backdrop-opacity-[0.5] bg-black-900_7e blur-[200.00px] flex flex-col items-center justify-end left-[0] p-[17px] top-[0] w-[63%]">
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
        </div>
      </div>
    </>
  );
};

HomepageHeroslider.defaultProps = {};

export default HomepageHeroslider;
