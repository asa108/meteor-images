import React from "react";

const ImageDetail = ({ image }) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={image.link} alt="LINK" />
      </div>

      <div className="media-body">
        <h4 className="media-heading">{image.title}</h4>
      </div>
    </li>
  );
};

export default ImageDetail;
