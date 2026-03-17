import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurImage({
  src,
  alt,
  blurhash,
  className = "",
  width = 1920,
  height = 1080,
  loading = "eager",
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && blurhash && (
        <Blurhash
          hash={blurhash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default BlurImage;
