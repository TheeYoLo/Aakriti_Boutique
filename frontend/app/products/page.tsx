"use client";

import { useState } from "react";
import ProductFilter from "@/components/product/ProductFilter";
import ProductGrid from "@/components/product/ProductGrid";

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    fabrics: [] as string[],
    collections: [] as string[],
    lengths: [] as string[],
    colours: [] as string[],
  });

  const products = [
    {
      id: 1,
      name: "Kantha Saree",
      category: "Saree",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      price: 2499,
      image: "/products/saree1.webp",
    },
    {
      id: 2,
      name: "Handloom Kurti",
      category: "Kurti",
      fabric: "Cotton",
      collection: "Cotton Collection",
      price: 1899,
      image: "/products/kurti1.webp",
    },
    {
      id: 3,
      name: "Artisan Bag",
      category: "Bag",
      fabric: "Art Silk",
      collection: "Art Silk Collection",
      price: 1599,
      image: "/products/bag1.webp",
    },
    {
      id: 4,
      name: "Silk Dupatta",
      category: "Dupatta",
      fabric: "Pure Silk",
      collection: "Pure Silk Collection",
      price: 1299,
      image: "/products/dupatta.webp",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesFabric =
      filters.fabrics.length === 0 ||
      filters.fabrics.includes(product.fabric);

    const matchesCollection =
      filters.collections.length === 0 ||
      filters.collections.includes(product.collection);

    return matchesFabric && matchesCollection;
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
          <ProductGrid products={filteredProducts} />
        </section>

      </div>

    </main>
  );
};

export default ProductsPage;