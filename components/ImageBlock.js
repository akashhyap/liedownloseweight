import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import React from "react";

const ImageBlock = ({ blok }) => {
  // console.log("image", blok);
  let imageStyles = (val) => {
    switch (blok.imageSize) {
      case "full-cover":
        return "full-cover";
        break;
      case "full-contain":
        return "full-contain";
        break;
      case "inherit-contain":
        return "inherit-contain";
        break;
      default:
        return "inherit-contain";
        break;
    }
  };
  let margin = (val) => {
    switch (blok.marginY) {
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
        return "my0";
        break;
    }
  };
  let maxWidth = (val) => {
    switch (blok.maxWidth) {
      case "max-w-xs":
        return "maxWXs";
        break;
      case "max-w-sm":
        return "maxWSm";
        break;
      case "max-w-4xl":
        return "maxW4Xl";
        break;
      case "max-w-5xl":
        return "maxW5Xl";
        break;
      default:
        return "maxWNone";
        break;
    }
  };
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
      case "py-40":
        return "pY40";
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

  const addedStyle = {
    marginBottom: blok?.marginBottom,
  }
  return (
    <div
      className={`relative flex ${blok?.align} ${margin(blok?.marginY)} ${padY(blok?.paddingY)} ${maxWidth(blok?.maxWidth)} ${blok?.margin} image_block`}
      style={addedStyle}
      {...storyblokEditable(blok)}
    >
      {blok?.image?.filename && (
        <Image
          alt=""
          src={`${blok?.image.filename}`}
          className={`max-w-full rounded-lg ${imageStyles(blok?.imageSize)}`}
          width={500}
          height={500}
        />
      )}
    </div>
  );
};

export default ImageBlock;
