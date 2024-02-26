import React from "react";

const Button = ({
  childrenText,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {childrenText}
    </button>
  );
};

export default Button;
