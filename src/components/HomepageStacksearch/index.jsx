import React from "react";

import { Button, Img, Input, List, Text } from "components";

const HomepageStacksearch = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-[82px] md:h-auto inset-x-[0] items-center justify-start mx-auto p-4 rounded-[12px] shadow-bs1 top-[0] w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-4 h-[226px] md:h-auto items-center justify-between mt-auto relative">
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
              <Button
                className="border border-solid border-yellow-50 cursor-pointer flex items-center justify-center min-w-[132px]"
                leftIcon={
                  <Img
                    className="h-6 mt-px mr-2"
                    src="images/img_television_black_900.svg"
                    alt="television"
                  />
                }
                shape="round"
                color="yellow_50"
                size="md"
                variant="fill"
              >
                <div className="!text-black-900 font-exo font-medium text-center text-lg">
                  {props?.forsalebutton}
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[132px]"
                leftIcon={
                  <Img
                    className="h-6 mt-px mr-2"
                    src="images/img_television_black_900_24x24.svg"
                    alt="television"
                  />
                }
                shape="round"
                color="yellow_50"
                size="md"
                variant="outline"
              >
                <div className="!text-black-900 font-exo font-medium text-center text-lg">
                  {props?.forrentbutton}
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[191px]"
                leftIcon={
                  <Img
                    className="h-6 mt-px mr-2"
                    src="images/img_user.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="yellow_50"
                size="md"
                variant="outline"
              >
                <div className="!text-black-900 font-exo font-medium text-center text-lg">
                  {props?.forinvestmentbutton}
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-2 h-[226px] md:h-auto items-start justify-start w-auto">
              <Input
                name="input"
                placeholder="Oxford"
                className="!placeholder:text-black-900 !text-black-900 font-exo p-0 text-left text-lg w-full"
                wrapClassName="flex w-full"
                suffix={
                  <div className="h-6 mt-px ml-[35px] w-6 bg-yellow-50 p-[7px] rounded-[50%]">
                    <Img
                      className="h-2.5 my-auto"
                      src="images/img_close_black_900.svg"
                      alt="close"
                    />
                  </div>
                }
                shape="round"
                color="amber_200"
                size="xs"
                variant="outline"
              ></Input>
              <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-yellow-50 rounded-md shadow-bs1 w-full">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start pt-2.5 px-4 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtExoRegular18"
                      >
                        {props?.text}
                      </Text>
                    </div>
                    <Img
                      className="h-px w-full"
                      src="images/img_divider.svg"
                      alt="divider"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start pt-2.5 px-4 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtExoRegular18"
                      >
                        {props?.text1}
                      </Text>
                    </div>
                    <Img
                      className="h-px w-full"
                      src="images/img_divider.svg"
                      alt="divider"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start pt-2.5 px-4 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtExoRegular18"
                      >
                        {props?.text2}
                      </Text>
                    </div>
                    <Img
                      className="h-px w-full"
                      src="images/img_divider.svg"
                      alt="divider"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start pt-2.5 px-4 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Img
                        className="h-[19px] w-6"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtExoRegular18"
                      >
                        {props?.text3}
                      </Text>
                    </div>
                    <Img
                      className="h-px w-full"
                      src="images/img_divider.svg"
                      alt="divider"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[121px]"
            leftIcon={
              <Img
                className="h-6 mt-px mr-2"
                src="images/img_search.svg"
                alt="search"
              />
            }
            shape="round"
            color="amber_A700"
            size="md"
            variant="fill"
          >
            <div className="!text-black-900 font-exo font-medium text-center text-lg">
              {props?.searchbutton}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

HomepageStacksearch.defaultProps = {
  searchbutton: "Search",
  forsalebutton: "For sale",
  forrentbutton: "For rent",
  forinvestmentbutton: "For investment",
};

export default HomepageStacksearch;
