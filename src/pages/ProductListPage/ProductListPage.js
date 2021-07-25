import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useSelector } from "react-redux";

const showProducts = (products) => {
  var result = null;
  if (products.length > 0) {
    result = products.map((product, index) => {
      return <ProductItem key={index} product={product} index={index} />;
    });
  }
};

function ProductListPage() {
  const products = useSelector((state) => state.products);
  console.log(products);

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <button type="button" className="btn btn-large btn-info mb-10">
        Them san pham
      </button>
      <ProductList>{showProducts(products)}</ProductList>
    </div>
  );
}
export default ProductListPage;
