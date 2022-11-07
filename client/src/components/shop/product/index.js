import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
//import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { productState, productReducer } from "./ProductContext";
import SingleProduct from "./SingleProduct";

export const ProductContext = createContext();

const ProductComponent = () => {
  return (
    <Fragment>
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6 product_page_top">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <SingleProduct /> */}
      </section>
    </Fragment>
  );
};

const Product = (props) => {
  const [data, dispatch] = useReducer(productReducer, productState);
  return (
    <Fragment>
      <ProductContext.Provider value={{ data, dispatch }}>
        <Layout children={<ProductComponent />} />
      </ProductContext.Provider>
    </Fragment>
  );
};

export default Product;
