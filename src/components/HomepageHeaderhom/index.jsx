import React from "react";

import { Button, Img, List, Text } from "components";

const HomepageHeaderhom = (props) => {
  return (
    <>
      <div
        className={`${props.className} flex flex-row justify-center items-center`}
      >
        <div className="bg-white-A700 flex flex-row items-center justify-start gap-6 px-4 py-2 rounded-[12px] w-auto md:w-full">
          <Img
            className="h-14 w-[151px]"
            src="images/img_logo.svg"
            alt="logo"
          />
          <div className="bg-white-A700 flex flex-col items-center justify-center rounded-[12px] w-auto md:w-full">
            <div className="bg-white-A700 flex sm:flex-col flex-row gap-6 items-center justify-start px-4 py-2 rounded-[12px] w-auto">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[94px]"
                leftIcon={
                  <Img
                    className="h-6 mt-px mr-1"
                    src="images/img_home.svg"
                    alt="home"
                  />
                }
                shape="round"
                color="cyan_50"
                size="sm"
                variant="fill"
              >
                <div className="!text-black-900 font-exo text-center text-lg">
                  {props?.home}
                </div>
              </Button>
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[28%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-center w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtExoRegular18"
                    >
                      {props?.forsaletext}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtExoRegular18"
                    >
                      {props?.forrenttext}
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtExoRegular18"
                  >
                    {props?.forinvestmenttext}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtExoRegular18"
                  >
                    {props?.blogtext}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-center text-lg w-auto"
                    size="txtExoRegular18"
                  >
                    {props?.signintext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-[29px] shadow-bs w-auto">
            <div className="bg-amber-A700 flex flex-row gap-2 items-center justify-center sm:px-5 px-6 py-4 rounded-[29px] w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_homepounds.svg"
                alt="homepounds"
              />
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtExoMedium18"
              >
                {props?.addlistingtext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageHeaderhom.defaultProps = {
  home: "Home",
  forsaletext: "For sale",
  forrenttext: "For rent",
  forinvestmenttext: "For investment",
  blogtext: "Blog",
  signintext: "Sign in",
  addlistingtext: "Add Listing",
};

export default HomepageHeaderhom;
