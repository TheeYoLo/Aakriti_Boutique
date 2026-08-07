import Image from "next/image";

export default function Hero() {
  return (
   <section className="relative h-[88vh] w-full">
  <Image
    src="/hero-bg.png"
    alt="Aakriti Hero"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0  bg-black/40" />
  <div className="absolute inset-0 flex items-center">
    <div className="mx-auto w-full max-w-7xl px-8">
      {/* Hero Content */}
      <div className="max-w-2xl text-white">
  <p className="mb-4 text-sm uppercase tracking-[0.3em]">
    Tradition Reimagined
  </p>

  <h1 className="mb-6 text-6xl font-bold leading-tight">
    From the Red Earth of Santiniketan to Your Wardrobe.
  </h1>

  <p className="mb-8 text-lg text-gray-200">
    Handcrafted pieces inspired by Bengal's rich artistic heritage,
    designed for modern elegance.
  </p>
    <div className="flex gap-8">

  <button className="rounded bg-[#9E5B47] px-8 py-3 duration-300 text-white transition hover:bg-[#874b3b]">
    Explore Collection
  </button>

  <button className="rounded border-[#9E5B47] border px-8 py-3 duration-300 text-[#d07559] hover:bg-[#874b3b] hover:text-white hover:border transition ">
    Our Stories
  </button>
    </div>
</div>
    </div>
  </div>
  
</section>
  );
}