import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {

  return (
    <div className="hero-banner-container">
      <div className="image-text-container">
      <Link href={`/product`}>
    
        <img
            src={urlFor(heroBanner.image && heroBanner.image[0])}
            alt="candle"
            className="hero-banner-image"
          />
          <p className="hero-banner-img-text">Świece</p>
        
      </Link>
        
      </div>
      <div className="image-text-container">
        <Link href="">
          <img
            src={urlFor(heroBanner.image && heroBanner.image[1])}
            alt="plant"
            className="hero-banner-image"
          />
        </Link>
        <Link className="hero-banner-img-text" href="">
          Rośliny
        </Link>
      </div>
    </div>
  );
}

export default HeroBanner;
