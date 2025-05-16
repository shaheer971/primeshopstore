
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ShopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop - PrimeShop";
  }, []);

  // Redirect to the ProductsPage since they're essentially the same
  return <Navigate to="/products" replace />;
};

export default ShopPage;
