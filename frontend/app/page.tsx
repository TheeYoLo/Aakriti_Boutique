import EmailCollection from "@/components/home/EmailCollection";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrival";
import StorySection from "@/components/home/StorySection";
import Image from "next/image";

export default function Home() {
  return (
   
   <>
   <Hero/>
   <FeaturedCollection/>
   <NewArrivals/>
   <FeaturedProducts/>
   <StorySection/>
   <EmailCollection/>
   </>
  );
}
