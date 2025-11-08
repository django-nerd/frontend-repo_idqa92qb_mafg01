import React from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Products from "./components/Products";
import Customize from "./components/Customize";
import StoriesContact from "./components/StoriesContact";

export default function App() {
  const shopRef = React.useRef(null);
  const handleShopClick = () => {
    shopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-rose-900">
      <AnimatePresence mode="wait">
        <Header onShopClick={handleShopClick} />
        <div ref={shopRef}>
          <Products />
        </div>
        <Customize />
        <StoriesContact />
      </AnimatePresence>
    </div>
  );
}
