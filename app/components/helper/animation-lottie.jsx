"use client";

import { useEffect, useRef } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let lottie;
    import("lottie-web").then((module) => {
      lottie = module.default;
      lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationPath,
      });
    });
    return () => {
      if (lottie && containerRef.current) {
        lottie.destroy();
      }
    };
  }, [animationPath]);

  return <div ref={containerRef} style={{ width: width || "95%" }} />;
};

export default AnimationLottie;
