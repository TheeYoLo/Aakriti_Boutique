import React, { Suspense } from "react";
import ProductsClient from "@/components/products/ProductsClient";

const ProductsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
};

export default ProductsPage;