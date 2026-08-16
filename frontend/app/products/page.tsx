"use client";

import { useState } from "react";
import ProductFilter from "@/components/product/ProductFilter";
import ProductGrid from "@/components/product/ProductGrid";

const ProductsPage = () => {
 const [filters, setFilters] = useState({
  fabrics: [],
  collections: [],
  lengths: [],
  colours: [],
  occasions: [],
  minPrice: 0,
  maxPrice: 100000,
});

const [sortBy, setSortBy] = useState("featured");


  const products = [
    {
      id: 1,
      name: "Kantha Saree",
      category: "Saree",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Red",
      price: 2499,
      image: "/products/saree1.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 2,
      name: "Handloom Kurti",
      category: "Kurti",
      fabric: "Cotton",
      collection: "Cotton Collection",
      length: "Without Blouse Piece",
      colour: "Blue",
      price: 1899,
      image: "/products/kurti1.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 3,
      name: "Artisan Bag",
      category: "Bag",
      fabric: "Art Silk",
      collection: "Art Silk Collection",
      length: "Without Blouse Piece",
      colour: "Black",
      price: 1599,
      image: "/products/bag1.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 4,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Purple",
      price: 1299,
      image: "/products/dupatta.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 5,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Purple",
      price: 1299,
      image: "/products/dupatta.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 6,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Purple",
      price: 1299,
      image: "/products/dupatta.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 7,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Purple",
      price: 1299,
      image: "/products/dupatta.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 8,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Purple",
      price: 1299,
      image: "/products/dupatta.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 9,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Purple",
      price: 1299,
      image: "/products/dupatta.webp",
      occasions: ["Wedding", "Festive"],
    },
    {
      id: 10,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      length: "With Blouse Piece",
      colour: "Purple",
      price: 1299,
      image: "/products/dupatta.webp",
      occasions: ["Wedding", "Festive"],
    },
  ];

const filteredProducts = products.filter((product) => {
  const matchesFabric =
    filters.fabrics.length === 0 ||
    filters.fabrics.includes(product.fabric);

  const matchesCollection =
    filters.collections.length === 0 ||
    filters.collections.includes(product.collection);

  const matchesLength =
    filters.lengths.length === 0 ||
    filters.lengths.includes(product.length);

  const matchesColour =
    filters.colours.length === 0 ||
    filters.colours.includes(product.colour);

  const matchesOccasion =
    filters.occasions.length === 0 ||
    filters.occasions.some((occasion) =>
      product.occasions?.includes(occasion)
    );

  const matchesPrice =
    product.price >= filters.minPrice &&
    product.price <= filters.maxPrice;

  return (
    matchesFabric &&
    matchesCollection &&
    matchesLength &&
    matchesColour &&
    matchesOccasion &&
    matchesPrice
  );
});


const sortedProducts = [...filteredProducts].sort((a, b) => {
  switch (sortBy) {
    case "price-low":
      return a.price - b.price;

    case "price-high":
      return b.price - a.price;

    case "newest":
      return b.id - a.id;

    default:
      return 0;
  }
});
  return (
    <main className="min-h-screen px-20 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">
          All Products
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Discover our collection of handcrafted products.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-10">

        {/* Filters */}
        <aside className="col-span-3">
          <ProductFilter
            filters={filters}
            setFilters={setFilters}
          />
        </aside>

        {/* Products */}
        <section className="col-span-9">
          <div className="mb-6 flex items-center justify-between">
  <p className="text-sm text-gray-500">
    {sortedProducts.length} Products
  </p>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border border-amber-800 bg-orange-100 px-4 py-2 text-sm outline-none focus:border-[#9E5B47]"
  >
    <option value="featured">All</option>
    <option value="newest">Newest</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
  </select>
</div>

          <ProductGrid products={sortedProducts} />
        </section>

      </div>
    </main>
  );
};

export default ProductsPage;