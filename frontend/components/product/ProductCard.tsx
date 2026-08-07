import Image from "next/image";
import type {Product} from "@/app/types/products";


type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { name, category, price, image } = product;

  return (
    <div>
            <div className="group overflow-hidden rounded-xl">

                <div className="relative h-[420px] w-76  overflow-hidden rounded-xl">

                    <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform  duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />

                    <div className="mt-5 absolute left-4 bottom-3">

                        <p className="text-sm uppercase tracking-[0.2em] text-[#9e5b47]">
    {category}
</p>
<h3 className="mt-2 text-2xl font-serif">
    {name}
</h3>
<p className="mt-3 text-xl text-white ">
    ₹{price}
</p>


                    </div>
                </div>
            </div>
    </div>
  );
}