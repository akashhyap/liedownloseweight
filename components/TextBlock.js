import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const TextBlock = ({ blok }) => {
  // console.log("text block", blok);
  let textColor = (val) => {
    switch (blok.color) {
      case "text-white":
        return "textWhite";
        break;
      case "text-black":
        return "textBlack";
        break;
      default:
        return " ";
        break;
    }
  };
  let textAlign = (val) => {
    switch (blok.textAlign) {
      case "text-left":
        return "textLeft";
        break;
      case "text-center":
        return "textCenter";
        break;
      case "text-right":
        return "textRight";
        break;
      default:
        return "textLeft";
        break;
    }
  };
  let paddingLeft = (val) => {
    switch (blok.paddingLeft) {
      case "pl-8":
        return "pL8";
        break;
      case "pl-16":
        return "pL16";
        break;
      case "pl-20":
        return "pL20";
        break;
      case "pl-64":
        return "pL64";
        break;
      default:
        return " ";
        break;
    }
  };

  let maxWidth = (val) => {
    switch (blok.maxWidth) {
      case "max-w-4xl":
        return "maxW4Xl";
        break;
      case "max-w-5xl":
        return "maxW5Xl";
        break;
      case "max-w-6xl":
        return "maxW6Xl";
        break;
      case "max-w-7xl":
        return "maxW7Xl";
        break;
      default:
        return "maxWNone";
        break;
    }
  };

  let alignMargin = (val) => {
    switch (blok.alignMargin) {
      case "mx-auto":
        return "mxAuto";
        break;
      case "ml-auto":
        return "mlAuto";
        break;
      case "ml-0":
        return "ml0";
        break;
      default:
        return "mxAuto";
        break;
    }
  };

  const selectedTag = blok.title || "h2";
  return (
    <div
      className={`z-10 relative leading-loose [&>h2]:text-4xl [&>h2]:my-5 [&>h3]:text-3xl [&>h3]:my-3 [&>h4]:text-xl [&>h4]:my-3 text_block ${paddingLeft(
        blok.paddingLeft
      )} ${textAlign(blok.textAlign)} ${maxWidth(blok.maxWidth)} ${textColor(
        blok.color
      )} ${alignMargin(blok.alignMargin)} ${blok?.width}`}
      {...storyblokEditable(blok)}
    >
      {blok.titleLabel &&
        React.createElement(selectedTag, null, blok.titleLabel)}
      {render(blok.content)}
    </div>
  );
};

export default TextBlock;
