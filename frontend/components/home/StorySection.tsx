import React from 'react'
import { Plus } from 'lucide-react'
import Image from 'next/image'

const StorySection = () => {
    return (

        <section className="pt-30">

            <div className="h-full w-full bg-[#fce9ac69] p-20">

                <div className="text-center  pt-12 pb-20">
                    <h2 className="text-4xl font-semibold text-[#000000]">
                        Our Stories
                    </h2>
                    <div className=" w-20 bg-amber-800 h-0.5 mt-2 mx-auto" />
                </div>
                <div className="flex justify-center items-center gap-18">

                    <div>

                        <div className="flex h-full flex-col gap-12 justify-center">

                            <p className="uppercase text-xs text-amber-800 font-semibold tracking-wider">
                                The Artisan's Touch
                            </p>

                            <h3 className="text-5xl font-serif font-semibold">
                                Every Stitch tells a story of patience and heritage.
                            </h3>

                            <p className="text-md  text-amber-950 " >

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores voluptas laborum blanditiis molestias aperiam assumenda et libero quo nostrum? Eum harum obcaecati deserunt repellat voluptatibus dolorum sapiente architecto, laboriosam in magnam quo dicta eius explicabo est distinctio id ea aliquam saepe dolor quam.

                            </p>

                            {/* Statistics */}
                            <div className="flex gap-4">
                                <div id="left" className=" font-serif text-amber-800 text-2xl" >
                                    <p> 500+ </p>
                                    <p className="text-sm text-amber-950">Artisans Empowered</p>
                                </div>

                                <div className="h-14 w-[0.2px] bg-[#a54e0752]" />

                                <div id="right" className="font-serif text-amber-800 text-2xl">
                                    <p> 100% </p>
                                    <p className="text-sm text-amber-950">Natural Dyes</p>
                                </div>
                            </div>
                            <div>

                                <p className="text-semibold text-amber-800">Meet the Hands Behind the Craft</p>
                                <div className="w-58 h-0.5 bg-[#a54e0752]" />
                            </div>
                        </div>


                    </div>
                    {/* right part */}
                    <div>

                        <div className="relative h-[700px] w-[600px]    ">
                            <Image
                                src="/artisan-story.webp"
                                alt="Artisan at work"
                                fill
                                className="rounded-md object-cover shadow-2xl rotate-2 transform duration-400 hover:rotate-[-2deg]"
                            />
                            <div
                                className="
                                    absolute
                                    -bottom-10
                                    -left-8
                                    w-44
                                    rounded-md
                                    bg-white
                                    p-2
                                    shadow-xl
                                    rotate-[-4deg]
                                    "
                            >
                                <Image
                                    src="/bag.webp"
                                    alt="Artisan Bag"
                                    width={200}
                                    height={200}
                                    className="rounded-md object-cover"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section>

    )
}

export default StorySection
