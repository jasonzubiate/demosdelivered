"use client";

import { useEffect, useState } from "react";
import { preLoaderAnimation } from "@/animations/index";

function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    preLoaderAnimation();
    setTimeout(() => {
      setIsLoading(false);
    }, 3800);
  }, []);

  return (
    <div className={`pre-loader-container ${isLoading ? "" : "hidden"}`}>
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>

      <div className="clipper-left">
        <div className="loader-text">Demos</div>
      </div>

      <div className="clipper-right">
        <div className="loader-text">Delivered</div>
      </div>
    </div>
  );
}

export default PageLoader;
