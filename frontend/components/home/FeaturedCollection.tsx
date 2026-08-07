import { MoveRight } from "lucide-react";
import CollectionCard from "../collection/CollectionCard";

const collections = [
  {
    id: 1,
    title: "Heritage Sarees",
    subtitle: "The Soul of Bengal",
    image: "/collection-saree1.webp",
  },
  {
    id: 2,
    title: "Atelier Kurtis",
    subtitle: "Modern Craft",
    image: "/collections-kurti.webp",
  },
  {
    id: 3,
    title: "Artisan Bags",
    subtitle: "Handmade Luxury",
    image: "/bag.webp",
  },
];

const FeaturedCollection = () => {
  return (
    <section className="mt-24">
      {/* Header */}
      <div className="flex items-center justify-between px-20">
        <div>
          <h2 className="text-3xl font-semibold">
            Featured Collections
          </h2>

          <div className="mt-2 h-0.5 w-20 bg-[#9E5B47]" />
        </div>

        <button className="flex items-center gap-2 text-[#9E5B47] transition-all duration-300 hover:gap-3 uppercase text-xs">
          View All Categories
          <MoveRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-12 gap-10 px-20">
        
        {/* Left Big Card */}
        <div className="col-span-8 h-[500px]">
          <CollectionCard collection={collections[0]} />
        </div>

        {/* Right Column */}
        <div className="col-span-4 flex flex-col gap-8">
          <div className="h-[238px]">
            <CollectionCard collection={collections[1]} />
          </div>

          <div className="h-[238px]">
            <CollectionCard collection={collections[2]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollection;