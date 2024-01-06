import React from "react";

import { Button, Img, Text } from "components";

const HomepagePropertycard = (props) => {
  return (
    <>
      <div className={props.className} style={{ marginTop: "50px" }}>
        <div className="h-[292px] relative w-full">
          <div className="absolute m-auto w-[393px] md:w-full">
            <Img
              className="h-[292px] m-auto object-cover rounded-[12px] w-full"
              alt="rectangle346245"
              src={props?.propertyimage}
            />
            <Button
              className="absolute flex h-10 items-center justify-center right-[4%] top-[5%] w-10"
              shape="circle"
              color="gray_50"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            </Button>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center left-[0] min-w-[73px] mt-[27px] rounded-br-[12px] rounded-tr-[12px] top-[9%]"
            leftIcon={
              <Img
                className="h-3 mt-0.5 mb-px mr-1 top-[1%] bottom-[0] right-[1%] absolute"
                src="images/img_close.svg"
                alt="close"
              />
            }
            color="gray_50"
            size="xs"
            variant="fill"
          >
            <div className="!text-black-900 font-exo text-left text-xs">
              {props?.onclose}
            </div>
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center px-4 w-full">
          <div className="flex flex-col gap-1 items-start justify-center w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
              size="txtExoSemiBold24"
            >
              {props?.price}
            </Text>
            <Text
              className="text-base text-cyan-900 w-full"
              size="txtExoSemiBold16"
            >
              {props?.propertytype}
            </Text>
            <Text
              className="text-base text-gray-800 w-full"
              size="txtExoRegular16"
            >
              {props?.address}
            </Text>
          </div>
          <div className="bg-black-900 flex flex-row gap-[22px] items-center justify-between p-4 rounded-[12px] w-full">
            <div className="flex flex-row gap-1 items-center justify-center w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_television.svg"
                alt="television"
              />
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtExoRegular14"
              >
                {props?.numofbedrooms}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-center w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_bathub.svg"
                alt="bathub"
              />
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtExoRegular14"
              >
                {props?.numofbathrooms}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-center w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_television_white_a700.svg"
                alt="television_One"
              />
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtExoRegular14"
              >
                {props?.furnishedstatus}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepagePropertycard.defaultProps = {
  propertyimage: "images/img_rectangle34624569.png",
  onclose: "For sale",
  price: "£4,250",
  propertytype: "Semi detached house",
  address: "Southfield Road, Oxford OX4",
  numofbedrooms: "3",
  numofbathrooms: "2",
  furnishedstatus: "Semi-furnished",
};

export default HomepagePropertycard;
