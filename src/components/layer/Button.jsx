import React from "react";

const Button = ({className, ButtonText}) => {
  return (
    <button className={`w-1/2 py-4 border border-black transition-all duration-500   ${className}`}>
      {ButtonText}
    </button>
  );
};

export default Button;
