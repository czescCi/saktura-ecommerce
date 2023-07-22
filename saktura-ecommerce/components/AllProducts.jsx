import React from "react";
import { Product } from ".";
import { client, urlFor } from "../lib/client";
import Link from "next/link";

function AllProducts({ products }) {
  let productsFiltered = products.filter((product) => product.slug != null);
  
  return (
    <div className="products-container">
      {productsFiltered?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default AllProducts;
