import { Mail } from 'lucide-react';
import React from 'react'

const EmailCollection = () => {
  return (
    <section className=" mx-auto py-22">
{/* header */}
        <div className="border p-24 bg-[#998f8d3b] w-[90vw]  border-red-200 ">

            <div className="flex justify-center items-center flex-col gap-4">
                <Mail color="brown" size={28} />
            
                <h3 className="font-serif  text-3xl" >
                    Join the Aakriti Collective 
                </h3>
                <p className="flex text-center text-[#4a1b1b]">
                    Be the first to know about our new stories, artisan spotlights, and <br />seasonal drops. Slow living, delivered to your inbox.
                </p>
               <div className="mt-4 w-full max-w-xl">
            {/* Email input */}
    <div className="flex items-center border-b border-[#9e5b47]">
        <input
            type="email"
            placeholder="Your soulful email"
            className="flex-1 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-[#8d817c]"
        />

        <button
            type="submit"
            className="bg-[#9e5b47] px-10 py-3 text-sm font-medium text-white transition hover:bg-[#874b3b]"
        >
            Subscribe
        </button>
    </div>

    <p className="mt-3 text-center text-xs pt-4 text-[#8d817c]">
        We respect your privacy as much as our traditions.
    </p>

</div>
            </div>

        </div>

    </section>


  )
}

export default EmailCollection
