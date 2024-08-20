"use client";

import Cart from "@/components/front-end/Cart";
import Features from "@/components/front-end/Features";
import Hero from "@/components/front-end/Hero";
import Navbar from "@/components/front-end/Navbar";
import TrendingProducts from "@/components/front-end/TrendingProducts";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Features />
      <TrendingProducts />
    </main>
  );
}
