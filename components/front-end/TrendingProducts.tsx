"use client";

import { IProduct } from "@/app/admin/dashboard/page";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface propsType {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/get_products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-black">Trending Products</h2>

        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Features</div>
          <div>Top Sellers</div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((item: IProduct) => (
          <ProductCard
            key={item._id}
            id={item._id}
            img={item.imgSrc}
            title={item.name}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
