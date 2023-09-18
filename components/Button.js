import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ blok }) => {
  // console.log("button", blok);
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
  return (
    <div className={`z-10 ${textAlign(blok.textAlign)}`}>
      <Link href={blok.link.cached_url} className="primary-btn">{blok.label}</Link>
    </div>
  );
};

export default Button;
