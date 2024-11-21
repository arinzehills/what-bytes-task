import React from "react";
// import "./Button.css";
import Loader from "./Loader";

const Button = ({
  color,
  bgColor,
  width,
  height,
  children,
  isCircular,
  buttonColor,
  loading,
  whiteText,
  prefixIcon,
  suffixIcon,
  withBorder = false,
  ...rest
}: any) => {
  const styles = `${
    loading
      ? "bg-black text-white"
      : color
      ? `bg-${color}-500 text-black`
      : "bg-black text-white"
  }  $hover:bg-${color}-700 flex ${bgColor} items-center justify-center font-medium py-2  px-4  border-black ${
    isCircular ? "rounded-full" : "rounded"
  }`;
  const widthStyle = width ? `w-${width}` : "w-44";
  const heightStyle = height ? `h-${height}` : "h-12";
  const classNames = `${buttonColor}  inline-block ${styles} ${widthStyle} ${heightStyle} `;
  let { disabled } = rest;

  return (
    <button
      className={classNames}
      {...rest}
      // type="button"
      style={{
        minHeight: "40px",
        opacity: disabled && 0.4,
        ...rest,
        borderWidth: withBorder && 1,
        // background: loading && "white",
        //   buttonColor === "btn-orange"
        //     ? "var(--orange-gradient)"
        //     : "var(--blue-gradient)",
      }}
    >
      <Loader
        imageSrc={""}
        loading={loading}
        containerClass="absolute inset-0"
      />

      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className="ml-2">{suffixIcon}</span>}
    </button>
  );
};

export default Button;
