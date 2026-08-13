import { MoveRight } from "lucide-react";
import ProductCard from "../product/ProductCard";

const newArrivals = [
    {
        id: 1,
        name: "Kantha Saree",
        category: "Saree",
        price: 2499,
        image: "/product-saree.webp",
    },
    {
        id: 2,
        name: "Handloom Kurti",
        category: "Kurti",
        price: 1899,
        image: "/handloom-kurti.webp",
    },
    {
        id: 3,
        name: "Artisan Bag",
        category: "Bag",
        price: 1599,
        image: "/artisan-bag.webp",
    },
    {
        id: 4,
        name: "Silk Dupatta",
        category: "Dupatta",
        price: 1299,
        image: "/dupatta.webp",
    },
];

const NewArrivals = () => {
  return (
    <section className="mt-10 px-20">

      {/* Header */}
      <div className="flex items-center mx-auto">
        <div className="mx-auto gap-2 flex flex-col justify-center font-serif items-center">
          <h2 className="text-3xl font-semibold">
            New Arrivals
          </h2>
          <p className="text-[#46271efc]">
            Freshly loomed peices from the atelier.
          </p>

          <div className="mt-2 h-0.5 w-20 bg-[#9E5B47]" />
        </div>
      </div>

      {/* Products */}
      <div className="mt-10 grid grid-cols-4 gap-6">
        {newArrivals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default NewArrivals;
