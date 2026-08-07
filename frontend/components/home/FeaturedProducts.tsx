import { MoveRight } from 'lucide-react';
import React from 'react'
import ProductCard from '../product/ProductCard';

const products = [
    {
        id: 1,
        name: "Kantha Saree",
        category: "Saree",
        price: 2499,
        image: "/product-saree.webp",
    },
    {
        id: 2,
        name: "Handloom Kurti",
        category: "Kurti",
        price: 1899,
        image: "/handloom-kurti.webp",
    },
    {
        id: 3,
        name: "Artisan Bag",
        category: "Bag",
        price: 1599,
        image: "/artisan-bag.webp",
    },
    {
        id: 4,
        name: "Silk Dupatta",
        category: "Dupatta",
        price: 1299,
        image: "/dupatta.webp",
    },
];


const FeaturedProducts = () => {



    return (
        <section className="mt-24">
            <div className="flex items-center justify-between px-20">
                {/* Header */}
                <div>
                    <h2 className="text-3xl font-semibold">
                        Featured Products
                    </h2>

                    <div className="mt-2 h-0.5 w-20 bg-[#9E5B47]" />
                </div>

                <button className="flex items-center gap-2 text-[#9E5B47] transition-all duration-300 hover:gap-3 uppercase text-xs">
                    View All Products
                    <MoveRight size={18} />
                </button>
            </div>


            {/* product cards */}
            <div className="flex gap-2 items-center justify-between px-12 py-26">

                {

                    products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}

                            />
                        )
                    })
                }
            </div>



        </section>


    )
}

export default FeaturedProducts
