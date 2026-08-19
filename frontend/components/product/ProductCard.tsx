import Image from "next/image";
import type { Product } from "@/app/types/products";
import Link from 'next/link'

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { name, category, price, image, id } = product;
  const imageSrc: string = Array.isArray(image) ? image[0] : image ?? '/product-saree.webp';

  return (
    
      <Link
      href={`/products/${id}`}
      className="group block w-full"
    >
      {/* Image */}
      <div className="relative h-105 w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
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
    </Link>
    
  );
}