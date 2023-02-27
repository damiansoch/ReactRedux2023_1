import React from 'react';

import ImageShow from './ImageShow';

const ImageList = ({ picturesArray }) => {
  return (
    <div>
      {picturesArray.map((picture) => (
        <ImageShow picture={picture} key={picture.id} />
      ))}
    </div>
  );
};

export default ImageList;
