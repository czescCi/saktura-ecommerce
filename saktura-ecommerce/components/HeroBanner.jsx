import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {
  return (
    <div className="hero-banner-container">
      <div className="images-container">
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image && heroBanner.image[0])}
          alt="plant"
          className="hero-banner-image"
        />
        <img
          src={urlFor(heroBanner.image && heroBanner.image[1])}
          alt="plant"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          {/* <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
