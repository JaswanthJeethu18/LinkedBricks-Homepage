import React from "react";

import { Img, List, Text } from "components";

const HomepageBlogsection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[30px] h-[592px] md:h-auto items-start justify-start pt-10 w-auto md:w-full">
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[97%] md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_288x393.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichpropertiesOne}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textOne}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_2.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichproperties}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree1}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar_40x40.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text1}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_3.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtExoSemiBold18"
                >
                  {props?.whichproperties1}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree2}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar_1.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text2}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone2}
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <List
            className="flex sm:flex-col flex-row gap-[30px] overflow-auto w-[7%]"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_4.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichproperties2}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree3}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start px-4 w-full">
                <div className="flex flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text3}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone3}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_5.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichproperties3}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree4}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text4}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone4}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_6.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichproperties4}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree5}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar_40x40.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text5}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone5}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_288x393.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichpropertiesone1}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree6}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text6}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone6}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_2.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichproperties5}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree7}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar_40x40.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text7}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone7}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-center justify-center pb-5 rounded-[12px] shadow-bs w-[393px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-72 md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_rectangle34624569_3.png"
                  alt="rectangle346245"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center px-4 w-full">
                <Text
                  className="leading-[26.00px] max-w-[361px] md:max-w-full text-black-900 text-lg"
                  size="txtExoSemiBold18"
                >
                  {props?.whichproperties6}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[361px] md:max-w-full text-base text-black-900"
                  size="txtExoRegular16Black900"
                >
                  {props?.thedemandforthree8}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar_1.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtExoSemiBold14"
                  >
                    {props?.text8}
                  </Text>
                  <Text
                    className="text-gray-800 text-sm w-full"
                    size="txtExoRegular14Gray800"
                  >
                    {props?.textone8}
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HomepageBlogsection.defaultProps = {
  whichpropertiesOne: "Which properties are selling best right now?",
  thedemandforthree:
    "The demand for 3 and 4-bedroom family homes has peaked as buyers with reduced bud...",
  text: "Guy Hawkins",
  textOne: "Jun 21, 2021",
  whichproperties: "What do higher interest rates mean for the housing market?",
  thedemandforthree1:
    "The Bank of England has raised rates again to 5.25% in an effort to cool inflation. City...",
  text1: "Amarachi Stones",
  textone1: "Jun 21, 2021",
  whichproperties1: "The best areas to live in North London",
  thedemandforthree2:
    "With great local parks, award-winning pubs and bars, popular restaurants and cafes, North Lon...",
  text2: "Bruono Marcos",
  textone2: "Jan 19, 2023",
  whichproperties2: (
    <>
      Living in Leeds
      <br />
    </>
  ),
  thedemandforthree3:
    "With lower than average house prices, a buzzing city centre and the glorious countryside of the...",
  text3: "Kendra Mars",
  textone3: "Aug 11, 2023",
  whichproperties3: "Where to find the best properties in the city of London",
  thedemandforthree4:
    "The demand for great properties in the city of London has peaked as buyers with reduced bu...",
  text4: "Romero Brandon",
  textone4: "Jun 21, 2021",
  whichproperties4:
    "Top tip for mortgage application: Prioritize a comprehensive and efficient approach",
  thedemandforthree5:
    "Gather documents, assess rates, choose a lender, complete the application accurately, an...",
  text5: "Onochie Obodoh",
  textone5: "Jun 21, 2021",
  whichpropertiesone1: "Which properties are selling best right now?",
  thedemandforthree6:
    "The demand for 3 and 4-bedroom family homes has peaked as buyers with reduced bud...",
  text6: "Guy Hawkins",
  textone6: "Jun 21, 2021",
  whichproperties5:
    "What do higher interest rates mean for the housing market?",
  thedemandforthree7:
    "The Bank of England has raised rates again to 5.25% in an effort to cool inflation. City...",
  text7: "Amarachi Stones",
  textone7: "Jun 21, 2021",
  whichproperties6: (
    <>
      The best ares to live in North London
      <br />
    </>
  ),
  thedemandforthree8:
    "With great local parks, award-winning pubs and bars, popular restaurants and cafes, North Lon...",
  text8: "Bruono Marcos",
  textone8: "Jan 19, 2023",
};

export default HomepageBlogsection;
