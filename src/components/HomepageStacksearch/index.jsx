import React from "react";

import { Button, Img, Input, List, Text } from "components";

const HomepageStacksearch = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-[82px] md:h-auto inset-x-[0] items-center justify-start mx-auto p-4 rounded-[12px] shadow-bs1 top-[0] w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-4 h-[226px] md:h-auto items-start justify-between mt-[0px] relative mr-[140px]">
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
              <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-yellow-50 rounded-md shadow-bs1 w-full"></div>
            </div>
          </div>
          <Button
            className="absolute right-5 cursor-pointer flex items-center  justify-center min-w-[121px] "
            leftIcon={
              <Img
                className="h-6 mt-px mr-2 "
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
