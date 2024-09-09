import React from "react";
import Banner from "./components/page/Banner";
import ProductPage from "./product/page";

const CommonPage = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductPage></ProductPage>
      <h1>Common Page</h1>
    </div>
  );
};

export default CommonPage;
