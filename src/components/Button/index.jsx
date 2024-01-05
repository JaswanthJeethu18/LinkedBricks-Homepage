import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]", circle: "rounded-[50%]" };
const variants = {
  outline: {
    amber_A700_6c: "border border-amber-A700_6c border-solid shadow-bs1",
    amber_A700: "border border-amber-A700 border-solid shadow-bs",
    yellow_50: "border border-solid border-yellow-50",
    black_900: "border border-black-900 border-solid",
  },
  fill: {
    cyan_600: "bg-cyan-600 shadow-bs text-black-900",
    cyan_50: "bg-cyan-50",
    yellow_50: "bg-yellow-50",
    amber_A700: "bg-amber-A700",
    gray_50: "bg-gray-50",
  },
};
const sizes = { xs: "pl-1 pr-[5px] py-[5px]", sm: "p-2", md: "p-3", lg: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "amber_A700_6c",
    "amber_A700",
    "yellow_50",
    "black_900",
    "cyan_600",
    "cyan_50",
    "gray_50",
  ]),
};

export { Button };
