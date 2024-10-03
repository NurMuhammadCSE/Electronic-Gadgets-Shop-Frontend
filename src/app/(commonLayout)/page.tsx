// "use client"
// import React, { useEffect, useState } from "react";
// import Banner from "./components/page/Banner";
// import ProductPage from "./product/page";

// const CommonPage = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Render nothing while the client-side hydration is happening
//   if (!isClient) return null;

//   return (
//     <div>
//       <Banner />
//       <ProductPage />
//     </div>
//   );
// };

// export default CommonPage;

"use client"
import FeaturedProduct from "@/components/ui/FeaturedProduct";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Banner = dynamic(() => import("./components/page/Banner"), {
  ssr: false,
});
const ProductPage = dynamic(() => import("./product/page"), { ssr: false });

const CommonPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render nothing while the client-side hydration is happening
  if (!isClient) return null;

  return (
    <div>
      <Banner />
      <FeaturedProduct></FeaturedProduct>
      <ProductPage />
    </div>
  );
};

export default CommonPage;
