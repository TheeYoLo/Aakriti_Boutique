"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import FilterOptionsModal from "./FilterOptionsModal";

type FilterGroupProps = {
  title: string;
  options: string[];
  selectedOptions: string[];
  onChange: (options: string[]) => void;
};

const FilterGroup = ({
  title,
  options,
  selectedOptions,
  onChange,
}: FilterGroupProps) => {
  const [expanded, setExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const visibleOptions = options.slice(0, 4);

  return (
    <>
      <div className="border-b border-gray-200 py-5">

        {/* Heading */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-between"
        >
          <span className="text-sm font-medium">
            {title}
          </span>

          {expanded ? (
            <Minus size={16} />
          ) : (
            <Plus size={16} />
          )}
        </button>

        {/* Options */}
        {expanded && (
          <div className="mt-4 space-y-3">

            {visibleOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => {
                    const newSelection =
                      selectedOptions.includes(option)
                        ? selectedOptions.filter(
                            (item) => item !== option
                          )
                        : [...selectedOptions, option];

                    onChange(newSelection);
                  }}
                  className="h-4 w-4 accent-[#9E5B47]"
                />

                <span>{option}</span>
              </label>
            ))}

            {/* More */}
            {options.length > 4 && (
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-sm font-medium text-[#9E5B47]"
              >
                + {options.length - 4} More
              </button>
            )}

          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <FilterOptionsModal
          title={title}
          options={options}
          selectedOptions={selectedOptions}
          onClose={() => setShowModal(false)}
          onApply={(options) => {
            onChange(options);
          }}
        />
      )}
    </>
  );
};

export default FilterGroup;