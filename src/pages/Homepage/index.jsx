import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HomepageBlogsection from "components/HomepageBlogsection";
import HomepageFooter from "components/HomepageFooter";
import HomepageHeaderhom from "components/HomepageHeaderhom";
import HomepageHeroslider from "components/HomepageHeroslider";
import HomepagePropertycard from "components/HomepagePropertycard";
import HomepageReviewsectiuon from "components/HomepageReviewsectiuon";
import HomepageStacksearch from "components/HomepageStacksearch";
import HomepageWhychooseus from "components/HomepageWhychooseus";

const HomepagePage = () => {
  const homepagePropertycardPropList = [
    {},
    {
      onclose: "For rent",
      propertytype: "Bungalow for rent",
      numofbedrooms: "4 beds",
      furnishedstatus: "Furnished",
      price: "£6,250",
      numofbathrooms: "4 baths",
      address: "Leeds city center",
      propertyimage: "images/img_rectangle34624569_292x393.png",
    },
    {
      onclose: "For investment",
      propertytype: "Penthouse for rent",
      numofbedrooms: "1 bed",
      furnishedstatus: "Un-furnished",
      price: "$2,250",
      numofbathrooms: "1 bath",
      address: "Manchester city",
      propertyimage: "images/img_rectangle34624569_1.png",
    },
  ];
  const homepageWhychooseusPropList = [
    {},
    {
      titletext: "Direct Communication",
      image: "images/img_megaphone.svg",
      descriptiontext:
        "Linked Bricks enables direct communication with landlords for questions, negotiations, and transparent experiences.",
    },
    {
      titletext: "Verified Listings",
      image: "images/img_television_white_a700_56x56.svg",
      descriptiontext:
        "Browse with confidence – Linked Bricks verifies all listings for your safety and quality assurance.",
    },
    {
      titletext: "Local Market Insights",
      image: "images/img_linkedin_white_a700.svg",
      descriptiontext:
        "Get informed with local market insights on property trends, prices, and neighborhoods for confident decisions.",
    },
    {
      titletext: "No Middlemen",
      image: "images/img_cut.svg",
      descriptiontext:
        "Linked Bricks eliminates intermediaries, granting you more control for faster, direct real estate interactions and decisions.",
    },
    {
      titletext: "Dedicated Customer Support:",
      image: "images/img_customersupport.svg",
      descriptiontext:
        "Our dedicated customer support team is ready to assist you at every step of your property search journey.",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-exo items-center justify-start mx-auto w-full">
        <HomepageHeaderhom className="flex flex-col gap-2.5 items-center justify-center md:px-5 w-full" />
        <div className="h-[1355px] md:px-5 relative w-full">
          <div className="font-leaguespartan mb-[-104.62px] mx-auto w-[1440px] md:w-full z-[1]">
            <HomepageHeroslider className="flex flex-col items-center justify-start mx-auto w-full" />
            <HomepageStacksearch className="absolute bottom-[0] font-exo h-[242px] md:h-auto left-[7%] p-4 w-[976px] md:w-full" />
          </div>
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1440px] mt-auto mx-auto md:px-10 sm:px-5 px-[100px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtExoSemiBold48"
            >
              Featured Properties
            </Text>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {homepagePropertycardPropList.map((props, index) => (
                <React.Fragment key={`HomepagePropertycard${index}`}>
                  <HomepagePropertycard
                    className="bg-white-A700 flex flex-1 flex-col gap-4 items-center justify-center pb-4 rounded-[12px] shadow-bs w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <div className="flex flex-col items-center justify-end w-full">
              <div className="flex flex-row gap-2 items-center justify-end w-auto">
                <Button
                  className="flex h-14 items-center justify-center w-14"
                  shape="round"
                  color="amber_A700_6c"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="flex h-14 items-center justify-center w-14"
                  shape="round"
                  color="amber_A700"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cyan-50 flex flex-col gap-10 items-start justify-start max-w-[1440px] mt-14 md:px-10 sm:px-5 px-[100px] py-10 w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
            size="txtExoSemiBold48"
          >
            Why Choose Us
          </Text>
          <div className="flex flex-col items-start justify-start max-w-[1240px] mx-auto w-full">
            <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {homepageWhychooseusPropList.map((props, index) => (
                <React.Fragment key={`HomepageWhychooseus${index}`}>
                  <HomepageWhychooseus
                    className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-4 h-full items-center justify-start p-4 rounded-[12px] shadow-bs1 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="md:h-[1643px] sm:h-[647px] h-[648px] mt-[55px] md:px-5 relative w-full">
          <HomepageBlogsection className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pl-4 w-[91%]" />
          <div className="absolute flex flex-col h-16 md:h-auto inset-x-[0] items-start justify-start max-w-[1440px] mx-auto md:px-10 sm:px-5 px-[100px] top-[0] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtExoSemiBold48"
            >
              Blog
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1440px] w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[331px] md:h-auto items-center justify-center w-auto md:w-full"
            style={{ backgroundImage: "url('images/img_illustrationbg.svg')" }}
          >
            <div className="bg-white-A700_b0 flex flex-col items-center justify-end py-[75px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[100px] w-full">
                <div className="flex flex-col gap-2.5 h-[179px] md:h-auto items-center justify-center">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-800 w-auto"
                    size="txtExoSemiBold48Cyan800"
                  >
                    13,000+
                  </Text>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                    size="txtExoRegular28"
                  >
                    Properties Listed
                  </Text>
                </div>
                <Line className="bg-cyan-800 h-[179px] md:h-px md:w-full w-px" />
                <div className="flex flex-col gap-2.5 h-[179px] md:h-auto items-center justify-center">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-800 w-full"
                    size="txtExoSemiBold48Cyan800"
                  >
                    8,782+
                  </Text>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-full"
                    size="txtExoRegular28"
                  >
                    Property Sales
                  </Text>
                </div>
                <Line className="bg-cyan-800 h-[179px] md:h-px md:w-full w-px" />
                <div className="flex flex-col gap-2.5 h-[179px] md:h-auto items-center justify-center">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-800 w-auto"
                    size="txtExoSemiBold48Cyan800"
                  >
                    5,014+
                  </Text>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                    size="txtExoRegular28"
                  >
                    Property Rented
                  </Text>
                </div>
                <Line className="bg-cyan-800 h-[179px] md:h-px md:w-full w-px" />
                <div className="flex flex-col gap-2.5 h-[179px] md:h-auto items-center justify-center">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-800 w-auto"
                    size="txtExoSemiBold48Cyan800"
                  >
                    95.7%
                  </Text>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                    size="txtExoRegular28"
                  >
                    Satisfied Clients
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-cyan-50 flex flex-col gap-10 h-[614px] md:h-auto items-center justify-start max-w-[1440px] mx-auto pt-14 w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[100px] w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                  size="txtExoSemiBold48"
                >
                  Customer Reviews
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[189px]"
                  rightIcon={
                    <Img
                      className="h-6 mt-px ml-2"
                      src="images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                  shape="round"
                  color="cyan_600"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium text-center text-lg">
                    See all reviews
                  </div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-between md:px-10 sm:px-5 px-[100px] w-full">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtExoMedium18"
                >
                  See what our client’s are saying
                </Text>
              </div>
            </div>
            <HomepageReviewsectiuon className="flex sm:flex-col flex-row gap-[30px] justify-center overflow-auto w-full" />
          </div>
          <HomepageFooter className="h-[537px] md:h-auto mt-[-41px] mx-auto pb-14 pt-[100px] md:px-10 sm:px-5 px-[100px] w-[1440px] md:w-full z-[1]" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
