"use client";

import FilterGroup from "./FilterGroup";
import ColourFilter from "./ColourFilter";

const fabrics = [
  "Pure Silk",
  "Cotton",
  "Art Silk",
  "Linen",
  "Georgette",
  "Organza",
  "Net",
  "Satin",
  "Dhakai",
  "Tussar",
  "Chanderi",
  "Sambalpuri",
  "Khadi",
];

const collections = [
  "Pure Silk Collection",
  "Cotton Collection",
  "Art Silk Collection",
  "Handloom Collection",
  "Sambalpuri Collection",
  "Dhakai Collection",
  "Chanderi Collection",
];

const lengths = [
  "With Blouse Piece",
  "Without Blouse Piece",
];

const colours = [
  { name: "Black", code: "#000000" },
  { name: "Red", code: "#C62828" },
  { name: "Blue", code: "#1565C0" },
  { name: "Green", code: "#2E7D32" },
  { name: "Pink", code: "#E91E63" },
  { name: "Yellow", code: "#F9A825" },
  { name: "White", code: "#FFFFFF" },
  { name: "Maroon", code: "#800000" },
  { name: "Purple", code: "#7B1FA2" },
  { name: "Orange", code: "#EF6C00" },
  { name: "Brown", code: "#795548" },
];

const occasions = [
  "Wedding",
  "Festive",
  "Party",
  "Traditional",
  "Casual",
  "Puja",
];

export type Filters = {
  fabrics: string[];
  collections: string[];
  lengths: string[];
  colours: string[];
  occasions: string[];
  minPrice: number;
  maxPrice: number;
};

type ProductFilterProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const ProductFilter = ({
  filters,
  setFilters,
}: ProductFilterProps) => {
  const clearAll = () => {
    setFilters({
      fabrics: [],
      collections: [],
      lengths: [],
      colours: [],
      occasions: [],
      minPrice: 0,
      maxPrice: 100000,
    });
  };

  return (
    <aside className="w-full">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide">
          Filters
        </h2>

        <button
          type="button"
          onClick={clearAll}
          className="text-sm text-[#9E5B47]"
        >
          Clear all
        </button>
      </div>

      {/* PRICE */}
      <div className="border-b border-gray-200 py-5">

        <h3 className="mb-6 text-sm font-medium">
          Price
        </h3>

        {/* Slider */}
        <div className="relative h-5">

          <div className="absolute top-2.5 left-0 right-0 h-[2px] bg-[#c9a58f]" />

          <input
            type="range"
            min="0"
            max="100000"
            step="100"
            value={filters.minPrice}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value <= filters.maxPrice) {
                setFilters((current) => ({
                  ...current,
                  minPrice: value,
                }));
              }
            }}
            className="price-slider absolute inset-0 w-full"
          />

          <input
            type="range"
            min="0"
            max="100000"
            step="100"
            value={filters.maxPrice}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value >= filters.minPrice) {
                setFilters((current) => ({
                  ...current,
                  maxPrice: value,
                }));
              }
            }}
            className="price-slider absolute inset-0 w-full"
          />

        </div>

        {/* Values */}
        <div className="mt-6 flex gap-3">

          <div className="flex-1">
            <p className="mb-2 text-xs text-gray-500">
              Minimum
            </p>

            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => {
                const value = Number(e.target.value);

                setFilters((current) => ({
                  ...current,
                  minPrice:
                    value <= current.maxPrice ? value : current.maxPrice,
                }));
              }}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#9E5B47]"
            />
          </div>

          <div className="flex-1">
            <p className="mb-2 text-xs text-gray-500">
              Maximum
            </p>

            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => {
                const value = Number(e.target.value);

                setFilters((current) => ({
                  ...current,
                  maxPrice:
                    value >= current.minPrice ? value : current.minPrice,
                }));
              }}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#9E5B47]"
            />
          </div>

        </div>
      </div>

      {/* FABRIC */}
      <FilterGroup
        title="Fabric"
        options={fabrics}
        selectedOptions={filters.fabrics}
        onChange={(options) =>
          setFilters((current) => ({
            ...current,
            fabrics: options,
          }))
        }
      />

      {/* COLLECTION */}
      <FilterGroup
        title="Collection"
        options={collections}
        selectedOptions={filters.collections}
        onChange={(options) =>
          setFilters((current) => ({
            ...current,
            collections: options,
          }))
        }
      />

      {/* LENGTH */}
      <FilterGroup
        title="Length"
        options={lengths}
        selectedOptions={filters.lengths}
        onChange={(options) =>
          setFilters((current) => ({
            ...current,
            lengths: options,
          }))
        }
      />

      {/* COLOUR */}
      <ColourFilter
  colours={colours}
  selectedColours={filters.colours}
  onChange={(colours) =>
    setFilters((current) => ({
      ...current,
      colours,
    }))
  }
/>

      {/* OCCASION */}
      <FilterGroup
        title="Occasion"
        options={occasions}
        selectedOptions={filters.occasions}
        onChange={(options) =>
          setFilters((current) => ({
            ...current,
            occasions: options,
          }))
        }
      />

    </aside>
  );
};

export default ProductFilter;