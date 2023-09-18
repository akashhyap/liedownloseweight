import React from 'react'

const Title = ({blok}) => {
  const selectedTag = blok.title || 'h2';
  
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
  return (
   <div className={`${textAlign(blok.textAlign)} ${textColor(blok.color)} [&>h1]:text-5xl [&>h1]:font-bold [&>h1]:my-6 [&>h2]:text-4xl [&>h2]:my-5 [&>h3]:text-3xl [&>h3]:my-3 section_title`}>
     {blok.titleLabel && React.createElement(selectedTag, null, blok.titleLabel)}
   </div>
  )
}

export default Title