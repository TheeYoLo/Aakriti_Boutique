import Image from "next/image";
import type { Product } from "@/app/types/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { name, category, price, image } = product;

  return (
    <div className="group w-full">

      {/* Image */}
      <div className="relative h-105 w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product information */}
      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#9e5b47]">
          {category}
        </p>

        <h3 className="mt-1 text-xl font-semibold">
          {name}
        </h3>

        <p className="mt-2 text-lg font-medium">
          ₹{price}
        </p>
      </div>

    </div>
  );
}