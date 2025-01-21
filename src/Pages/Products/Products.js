import React from "react";
import "./Products.css";
import ProductsTable from "../../Components/ProductsTable/ProductsTable";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";

export default function Products() {
  return (
    <div className="new-product-header">
      <AddNewProduct />
      <ProductsTable />
    </div>
  );
}
