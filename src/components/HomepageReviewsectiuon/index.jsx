import React from "react";

import { Button, Img, List, Text } from "components";

const HomepageReviewsectiuon = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[900px]">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysaleOne}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[900px] ">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar_1.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username1}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date1}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysale}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[358px]">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar_2.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username2}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date2}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysaleone1}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[358px]">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar_1.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username3}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date3}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysale1}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[358px]">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username4}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date4}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysaleone2}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[358px]">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar_1.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username5}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date5}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysale2}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[358px]">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar_2.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username6}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date6}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysaleone3}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-4 rounded-[12px] shadow-bs1 w-[358px]">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <div className="flex flex-col h-10 items-center justify-start w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatar_1.png"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtExoSemiBold14"
                >
                  {props?.username7}
                </Text>
                <Text
                  className="text-gray-800 text-sm w-full"
                  size="txtExoRegular14Gray800"
                >
                  {props?.date7}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[326px] md:max-w-full text-base text-black-900"
              size="txtExoRegular16Black900"
            >
              {props?.ourpropertysale3}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal_Four"
                />
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="black_900"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};

HomepageReviewsectiuon.defaultProps = {
  username: "Guy Hawkins (Landlord)",
  date: "Jun 21, 2021",
  ourpropertysaleOne:
    "Our property sale was Professionally handled by Linked Bricks throughout the entire process...",
  username1: "kelly Rowland (buyer)",
  date1: "Jun 21, 2021",
  ourpropertysale:
    "Wanted an online agent to market my bungalow and rang loads to see how they answered the phone....",
  username2: "Mabel Stones (Seller)",
  date2: "Jun 21, 2021",
  ourpropertysaleone1:
    "Our property sale was Professionally handled by Linked Bricks throughout the entire process...",
  username3: "kelly Rowland (buyer)",
  date3: "Jun 21, 2021",
  ourpropertysale1:
    "Wanted an online agent to market my bungalow and rang loads to see how they answered the phone....",
  username4: "Guy Hawkins (Landlord)",
  date4: "Jun 21, 2021",
  ourpropertysaleone2:
    "Our property sale was Professionally handled by Linked Bricks throughout the entire process...",
  username5: "kelly Rowland (buyer)",
  date5: "Jun 21, 2021",
  ourpropertysale2:
    "Wanted an online agent to market my bungalow and rang loads to see how they answered the phone....",
  username6: "Mabel Stones (Seller)",
  date6: "Jun 21, 2021",
  ourpropertysaleone3:
    "Our property sale was Professionally handled by Linked Bricks throughout the entire process...",
  username7: "kelly Rowland (buyer)",
  date7: "Jun 21, 2021",
  ourpropertysale3:
    "Wanted an online agent to market my bungalow and rang loads to see how they answered the phone....",
};

export default HomepageReviewsectiuon;
