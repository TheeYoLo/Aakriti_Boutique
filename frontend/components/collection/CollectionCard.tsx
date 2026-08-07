import Image from "next/image";
import type {Collection} from "@/app/types/collection"


type CollectionCardProps = {
    collection : Collection;
};

export default function CollectionCard({
    collection,
}: CollectionCardProps) {
    const { title, subtitle, image } = collection;
    
    return (
    
            <div className=" relative overflow-hidden w-full h-full rounded-lg group ">

                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute  inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent " />
            <div className="absolute bottom-6 left-6 transition-all duration-500 group-hover:-translate-y-2">

            <p className="text-xs uppercase tracking-[0.3em] text-[#c0bab8] ">
                {subtitle}
            </p>

            <h3 className="mt-2 text-2xl uppercase font-semibold text-[#f7f6f6]">
                {title}
            </h3>
            </div>
            </div>
        
    );
}