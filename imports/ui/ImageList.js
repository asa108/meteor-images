import React from "react";
import ImageDetail from "./ImageDetail";

const IMAGES = [
  { title: "Pen", link: "https://dummyimage.com/600x400" },
  { title: "pine tree", link: "https://dummyimage.com/600x400" },
  { title: "dog", link: "https://dummyimage.com/600x400" },
];

const ImageList = () => {
  const RenderImages = IMAGES.map((image) => {
    return <ImageDetail image={image} />;
  });
  return <ul className="media-list list-group">{RenderImages}</ul>;
};

export default ImageList;
