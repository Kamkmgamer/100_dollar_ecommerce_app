"use client";

import { useState, useEffect } from "react";

interface SlowImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function SlowImage({ src, alt, className }: SlowImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className} style={{ position: "relative" }}>
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
            color: "#999",
            fontSize: "0.875rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Loading image...
        </div>
      )}
      {loaded && (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      )}
    </div>
  );
}
