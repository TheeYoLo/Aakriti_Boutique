"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const ProductPage = () => {
  const params = useParams();

  const id = params.id as string;

  const [quantity, setQuantity] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);

  const product = {
    id,
    name: "Kantha Saree",
    category: "Saree",
    fabric: "Pure Silk",
    collection: "Pure Silk Collection",
    length: "With Blouse Piece",
    colour: "Red",
    occasions: ["Wedding", "Festive"],
    price: 2499,
    image: "/products/saree1.webp",
  };

  const handleAddToCart = () => {
    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingItem = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart: CartItem[];

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCartAdded(true);
  };

  return (
    <main className="min-h-screen bg-white px-6 py-6 md:px-12 lg:px-20">

      {/* Breadcrumb */}
      <div className="mb-8 text-xs text-gray-500">
        Home / Products / Sarees / {product.name}
      </div>

      {/* Main Product Section */}
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">

        {/* Product Gallery */}
        <div className="flex gap-4">

          {/* Thumbnails */}
          <div className="flex w-20 flex-col gap-3">
            {[1, 2, 3, 4].map((item) => (
              <button
                key={item}
                type="button"
                className="overflow-hidden border border-gray-200"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} thumbnail ${item}`}
                  width={80}
                  height={100}
                  className="h-24 w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F8F5F2]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col">

          {/* Category */}
          <p className="mb-3 text-sm uppercase tracking-widest text-[#9E5B47]">
            {product.category}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <div className="text-sm tracking-wide text-[#9E5B47]">
              ★★★★★
            </div>

            <span className="text-sm text-gray-500">
              4.8 (24 Reviews)
            </span>
          </div>

          <div className="my-6 h-px bg-gray-200" />

          {/* Price */}
          <div>
            <span className="text-3xl font-medium text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <p className="mt-1 text-sm text-gray-500">
              Inclusive of all taxes
            </p>
          </div>

          {/* Colour */}
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                Colour:
              </span>

              <span className="text-sm text-gray-500">
                {product.colour}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="h-10 w-10 rounded-full border-2 border-[#9E5B47] p-1"
                aria-label="Red"
              >
                <span className="block h-full w-full rounded-full bg-red-700" />
              </button>

              <button
                type="button"
                className="h-10 w-10 rounded-full border border-gray-300 p-1"
                aria-label="Pink"
              >
                <span className="block h-full w-full rounded-full bg-pink-500" />
              </button>

              <button
                type="button"
                className="h-10 w-10 rounded-full border border-gray-300 p-1"
                aria-label="Black"
              >
                <span className="block h-full w-full rounded-full bg-black" />
              </button>
            </div>
          </div>

          {/* Blouse Option */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-gray-900">
              Blouse Option
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                className="border border-[#9E5B47] px-5 py-3 text-sm"
              >
                With Blouse Piece
              </button>

              <button
                type="button"
                className="border border-gray-300 px-5 py-3 text-sm"
              >
                Without Blouse
              </button>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-gray-900">
              Quantity
            </p>

            <div className="flex w-fit items-center border border-gray-300">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                className="px-4 py-3 text-lg"
              >
                −
              </button>

              <span className="min-w-12 text-center text-sm">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="px-4 py-3 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Stock */}
          <p className="mt-5 text-sm text-green-700">
            In stock
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 bg-[#9E5B47] px-6 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#824936]"
            >
              {cartAdded ? "Added to Cart ✓" : "Add to Cart"}
            </button>

            <button
              type="button"
              className="flex-1 border border-[#9E5B47] px-6 py-4 text-sm font-medium tracking-wide text-[#9E5B47] transition hover:bg-[#9E5B47] hover:text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mt-20 border-t border-gray-200 pt-10">

        <h2 className="text-2xl font-medium text-gray-900">
          Product Details
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 border-y border-gray-200 py-6 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Fabric
            </p>

            <p className="mt-2 text-sm text-gray-900">
              {product.fabric}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Collection
            </p>

            <p className="mt-2 text-sm text-gray-900">
              {product.collection}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Length
            </p>

            <p className="mt-2 text-sm text-gray-900">
              {product.length}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Occasion
            </p>

            <p className="mt-2 text-sm text-gray-900">
              {product.occasions.join(", ")}
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="mt-10 max-w-4xl">
          <h3 className="text-lg font-medium text-gray-900">
            About this Saree
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            A beautifully handcrafted saree created with traditional
            craftsmanship and carefully selected fabric. Designed to bring
            together timeless Indian artistry with an elegant contemporary
            look.
          </p>
        </div>

      </section>

    </main>
  );
};

export default ProductPage;