import React from "react";
import TitleHeader from "./layer/TitleHeader";
import Container from "./layer/Container";
import ProductItem from "./layer/ProductItem";

const BestSeller = () => {
  return (
    <div>
      <Container className="mt-24">
        <TitleHeader className='mb-16' headerText="Best Seller" />
        <div className=" flex justify-between">
            <ProductItem offer='New' pName='Basic Crew Neck Tee' price='55' brand='Black' img='/public/product/product_5.jpg' />
            <ProductItem offer='New' pName='Basic Crew Neck Tee' price='55' brand='Black' img='/public/product/product_6.jpg' />
            <ProductItem offer='90%' pName='Basic Crew Neck Tee' price='55' brand='Black' img='/public/product/product_7.jpg' />
            <ProductItem offer='New' pName='Basic Crew Neck Tee' price='55' brand='Black' img='/public/product/product_8.jpg' />
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
