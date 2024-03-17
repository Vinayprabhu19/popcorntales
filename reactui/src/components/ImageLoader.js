import React, { useState } from 'react';
import '../css/card.css';
import logo from "../img/3dlogo.webp";
const ImageLoader = ({className,alt, src }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <img className={className} src={logo} alt={alt} />}
      <img
        className={className}
        src={src}
        alt={alt}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageLoader;
