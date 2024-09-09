import ProductDetail from "@/components/ui/ProductDetail";
import { Product } from "@/types";

// Interface for product ID params
interface ProductId {
  params: {
    id: string;
  };
}

// Generate static parameters for SSG (if needed, otherwise remove)
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/api/product/products");
  const products = await res.json();
  //   console.log(products?.data);
  return products?.data?.map((product: Product) => ({
    id: product._id,
  }));
};

// Product detail page component
const ProductDetailPage = async ({ params }: ProductId) => {
  const res = await fetch(
    `http://localhost:5000/api/product/product/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();

  return (
    <div className="my-10">
      <ProductDetail product={product.data} />
    </div>
  );
};

export default ProductDetailPage;
