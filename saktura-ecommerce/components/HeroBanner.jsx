import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {
  return (
    <div className="hero-banner-container">
      <div className="image-text-container">
        <img
          src={urlFor(heroBanner.image && heroBanner.image[0])}
          alt="candle"
          className="hero-banner-image"
        />
        <a className="hero-banner-img-text">Świece</a>
      </div>
      <div className="image-text-container">
        <img
          src={urlFor(heroBanner.image && heroBanner.image[1])}
          alt="plant"
          className="hero-banner-image"
        />
        <a className="hero-banner-img-text">Rośliny</a>
      </div>
      {/* <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
      </div> */}
    </div>
  );
}

export default HeroBanner;
