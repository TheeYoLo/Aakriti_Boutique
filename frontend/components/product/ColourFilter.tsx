"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type Colour = {
  name: string;
  code: string;
};

type ColourFilterProps = {
  colours: Colour[];
  selectedColours: string[];
  onChange: (colours: string[]) => void;
};

const ColourFilter = ({
  colours,
  selectedColours,
  onChange,
}: ColourFilterProps) => {
  const [expanded, setExpanded] = useState(true);

  const visibleColours = colours.slice(0, 8);

  const toggleColour = (colour: string) => {
    const newSelection = selectedColours.includes(colour)
      ? selectedColours.filter((item) => item !== colour)
      : [...selectedColours, colour];

    onChange(newSelection);
  };

  return (
    <div className="border-b border-gray-200 py-5">

      {/* Heading */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between"
      >
        <span className="text-sm font-medium">
          Colour
        </span>

        {expanded ? (
          <Minus size={16} />
        ) : (
          <Plus size={16} />
        )}
      </button>

      {expanded && (
        <div className="mt-5 flex flex-wrap gap-4">

          {visibleColours.map((colour) => {
            const selected = selectedColours.includes(colour.name);

            return (
              <button
                key={colour.name}
                type="button"
                onClick={() => toggleColour(colour.name)}
                title={colour.name}
                aria-label={`Filter by ${colour.name}`}
                className={`
                  relative flex h-9 w-9 items-center justify-center
                  rounded-full border
                  transition-all duration-200
                  ${
                    selected
                      ? "border-[#9E5B47] ring-2 ring-[#9E5B47] ring-offset-2"
                      : "border-gray-300 hover:scale-110"
                  }
                `}
              >
                <span
                  className="h-7 w-7 rounded-full border border-black/10"
                  style={{
                    backgroundColor: colour.code,
                  }}
                />

                {/* Check mark */}
                {selected && (
                  <span className="absolute text-xs font-bold text-white">
                    ✓
                  </span>
                )}
              </button>
            );
          })}

        </div>
      )}
    </div>
  );
};

export default ColourFilter;