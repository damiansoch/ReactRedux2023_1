import React from "react";

const ImageShow = ({ picturesArray }) => {
  return (
    <>
      {picturesArray.map((picture) => (
        <img
          key={picture.id}
          src={picture.urls.thumb}
          alt={picture.alt_description}
        />
      ))}
    </>
  );
};

export default ImageShow;
