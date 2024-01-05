import React from "react";

import { Img, Text } from "components";

const HomepageWhychooseus = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900 flex flex-col items-center justify-center p-4 rounded-[12px] w-[88px]">
          <Img className="h-14 w-14" alt="hasslefree" src={props?.image} />
        </div>
        <div className="flex flex-1 flex-col gap-1 h-full items-start justify-center w-full">
          <Text
            className="text-black-900 text-lg w-full"
            size="txtExoSemiBold18"
          >
            {props?.titletext}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[469px] md:max-w-full text-base text-black-900"
            size="txtExoRegular16Black900"
          >
            {props?.descriptiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

HomepageWhychooseus.defaultProps = {
  image: "images/img_hasslefree.svg",
  titletext: "Hassle-Free Searching",
  descriptiontext:
    "Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results.",
};

export default HomepageWhychooseus;
