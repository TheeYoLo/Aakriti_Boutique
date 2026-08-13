"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

type FilterOptionsModalProps = {
  title: string;
  options: string[];
  selectedOptions: string[];
  onClose: () => void;
  onApply: (options: string[]) => void;
};

const FilterOptionsModal = ({
  title,
  options,
  selectedOptions,
  onClose,
  onApply,
}: FilterOptionsModalProps) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>(selectedOptions);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const toggleOption = (option: string) => {
    setSelected((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  };

  const clearAll = () => {
    setSelected([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">

      <div className="w-full max-w-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center gap-6 border-b px-6 py-5">

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          {/* Search */}
          <div className="flex flex-1 items-center border border-gray-300 px-3">

            <Search size={17} className="text-gray-500" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${title}`}
              className="w-full bg-transparent px-3 py-2 text-sm outline-none"
            />

          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-700 transition hover:text-black"
          >
            <X size={22} />
          </button>

        </div>

        {/* Options */}
        <div className="grid max-h-[430px] grid-cols-2 gap-x-12 gap-y-5 overflow-y-auto px-6 py-6">

          {filteredOptions.map((option) => (

            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >

              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="h-5 w-5 accent-[#9E5B47]"
              />

              <span>
                {option}
              </span>

            </label>

          ))}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 border-t px-6 py-4">

          <button
            type="button"
            onClick={clearAll}
            className="text-sm text-[#9E5B47]"
          >
            Clear All
          </button>

          <button
            type="button"
            onClick={() => {
              onApply(selected);
              onClose();
            }}
            className="bg-[#9E5B47] px-7 py-2.5 text-sm text-white transition hover:bg-[#874b3b]"
          >
            Apply
          </button>

        </div>

      </div>

    </div>
  );
};

export default FilterOptionsModal;