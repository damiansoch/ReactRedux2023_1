import React from 'react';

const ImageShow = ({ picture }) => {
  return (
    <>
      {
        <img
          key={picture.id}
          src={picture.urls.small}
          alt={picture.alt_description}
        />
      }
    </>
  );
};

export default ImageShow;
