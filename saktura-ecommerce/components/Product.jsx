import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

import { urlFor } from '../lib/client';

function Product({ product: { image, name, slug, price } }) {

  useEffect(() => {
    console.log('value of slug:', slug);
  }, [slug]);

  if (!slug) return null;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} className='product-image'/>
        <p className='product-name'>{name}</p>
        <p className='product-price'>{price} zł</p>
        </div>
      </Link>
    </div>
  )
}

export default Product