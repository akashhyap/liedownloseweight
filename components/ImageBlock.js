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
  return (
    <div
      className={`relative ${margin(blok.marginY)} ${maxWidth(blok.maxWidth)} ${blok?.margin} image_block`}
    >
      {blok?.image?.filename && (
        <Image
          alt=""
          src={`${blok.image.filename}`}
          className={`w-full rounded-lg ${imageStyles(blok.imageSize)}`}
          width={500}
          height={500}
        />
      )}
    </div>
  );
};

export default ImageBlock;
