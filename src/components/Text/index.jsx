import React from "react";

const sizeClasses = {
  txtExoRegular18Gray50001: "font-exo font-normal",
  txtExoSemiBold18WhiteA700: "font-exo font-semibold",
  txtExoRegular14: "font-exo font-normal",
  txtExoRegular16: "font-exo font-normal",
  txtExoRegular18: "font-exo font-normal",
  txtExoRegular28: "font-exo font-normal",
  txtExoMedium18: "font-exo font-medium",
  txtExoSemiBold48Cyan800: "font-exo font-semibold",
  txtExoRegular14Gray800: "font-exo font-normal",
  txtLeagueSpartanExtraBold80: "font-extrabold font-leaguespartan",
  txtExoSemiBold16: "font-exo font-semibold",
  txtExoRegular16Black900: "font-exo font-normal",
  txtExoSemiBold18: "font-exo font-semibold",
  txtExoSemiBold24: "font-exo font-semibold",
  txtExoSemiBold48: "font-exo font-semibold",
  txtLeagueSpartanSemiBold32: "font-leaguespartan font-semibold",
  txtExoSemiBold14: "font-exo font-semibold",
  txtExoMedium16: "font-exo font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
