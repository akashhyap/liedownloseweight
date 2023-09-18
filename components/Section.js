import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

const Section = ({ blok }) => {
  // console.log("Section", blok);
  let margin = (val) => {
    switch (blok.margin) {
      case "my-5":
        return "my5";
        break;
      case "my-8":
        return "my8";
        break;
      case "my-10":
        return "my10";
        break;
      case "my-20":
        return "my20";
        break;
      case "my-24":
        return "my24";
        break;
      case "my-28":
        return "my28";
        break;
      default:
        return "my5";
        break;
    }
  };
  // let padX = (val) => {
  //   switch (blok.padX) {
  //     case "px-10":
  //       return "pX10";
  //       break;
  //     case "px-50":
  //       return "pX50";
  //       break;
  //     default:
  //       return "pX0";
  //       break;
  //   }
  // };
  let padY = (val) => {
    switch (blok.paddingY) {
      case "py-10":
        return "pY10";
        break;
      case "py-16":
        return "pY16";
        break;
      case "py-20":
        return "pY20";
        break;
      case "py-24":
        return "pY24";
        break;
      case "py-50":
        return "pY50";
        break;
      case "py-75":
        return "pY75";
        break;
      default:
        return "pY0";
        break;
    }
  };
  let grid = (val) => {
    switch (blok.grid) {
      case "grid-cols-2":
        return "g-cols-2";
        break;
      case "grid-cols-3":
        return "g-cols-3";
        break;
      case "grid-cols-4":
        return "g-cols-4";
        break;
      default:
        return "g-cols-1";
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

  const backgroundColor = {
    backgroundColor: blok.bgColor.color,
  };

  return (
    <div className={`relative ${margin(blok.margin)} ${padY(blok.paddingY)} ${blok?.className}`} style={backgroundColor}>
      <div className={`section_block ${maxWidth(blok.maxWidth)} ${blok.grid ? "grid gap-6 " + grid(blok.grid) : ""}`}>
        {blok?.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Section;
