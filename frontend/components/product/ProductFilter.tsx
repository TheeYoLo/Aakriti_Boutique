import FilterGroup from "./FilterGroup";

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
  "Black",
  "Red",
  "Blue",
  "Green",
  "Pink",
  "Yellow",
  "White",
  "Maroon",
  "Purple",
  "Orange",
  "Brown",
];

type ProductFilterProps = {
  filters: {
    fabrics: string[];
    collections: string[];
    lengths: string[];
    colours: string[];
  };

  setFilters: React.Dispatch<
    React.SetStateAction<{
      fabrics: string[];
      collections: string[];
      lengths: string[];
      colours: string[];
    }>
  >;
};

const ProductFilter = ({
  filters,
  setFilters,
}: ProductFilterProps) => {
  return (
    <aside>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-5">

        <h2 className="text-sm font-semibold uppercase tracking-wide">
          Filters
        </h2>

        <button
          type="button"
          className="text-sm text-[#9E5B47]"
        >
          Clear all
        </button>

      </div>

      {/* Price */}
      <div className="border-b border-gray-200 py-5">

        <h3 className="mb-5 text-sm font-medium">
          Price
        </h3>

        {/* Range */}
        <div className="relative px-2">

          <div className="h-[2px] w-full bg-[#c9a58f]" />

          <div className="absolute -top-[7px] left-0 h-5 w-5 rounded-full border border-[#9E5B47] bg-white" />

          <div className="absolute -top-[7px] right-0 h-5 w-5 rounded-full border border-[#9E5B47] bg-white" />

        </div>

        {/* Minimum / Maximum */}
        <div className="mt-6 flex gap-3">

          <div className="flex-1">
            <p className="mb-2 text-xs text-gray-500">
              Minimum
            </p>

            <input
              type="number"
              placeholder="₹199"
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#9E5B47]"
            />
          </div>

          <div className="flex-1">
            <p className="mb-2 text-xs text-gray-500">
              Maximum
            </p>

            <input
              type="number"
              placeholder="₹1199"
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#9E5B47]"
            />
          </div>

        </div>

      </div>

      {/* Fabric */}
      <FilterGroup
        title="Fabric"
        options={fabrics}
        selectedOptions={filters.fabrics}
        onChange={(options) => {
          setFilters((current) => ({
            ...current,
            fabrics: options,
          }));
        }}
      />

      {/* Collection */}
      <FilterGroup
        title="Collection"
        options={collections}
        selectedOptions={filters.collections}
        onChange={(options) => {
          setFilters((current) => ({
            ...current,
            collections: options,
          }));
        }}
      />

    </aside>
  );
};

export default ProductFilter;