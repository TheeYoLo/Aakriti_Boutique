import FeaturedCollection from "@/components/home/FeaturedCollection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import StorySection from "@/components/home/StorySection";
import Image from "next/image";

export default function Home() {
  return (
   
   <>
   <Hero/>
   <FeaturedCollection/>
   <StorySection/>
   <FeaturedProducts/>
   </>
  );
}
