"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

const CartPage = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");

        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);

                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                }
            } catch {
                localStorage.removeItem("cart");
                setCart([]);
            }
        }

        setIsLoaded(true);
    }, []);

    const updateCart = (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const increaseQuantity = (id: string) => {
        const updatedCart = cart.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        );

        updateCart(updatedCart);
    };

    const decreaseQuantity = (id: string) => {
        const updatedCart = cart
            .map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            )
            .filter((item) => item.quantity > 0);

        updateCart(updatedCart);
    };

    const removeItem = (id: string) => {
        const updatedCart = cart.filter((item) => item.id !== id);

        updateCart(updatedCart);
    };

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    if (!isLoaded) {
        return null;
    }

    return (
        <main className="min-h-screen bg-white px-6 py-10 md:px-12 lg:px-20">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-medium text-gray-900 md:text-4xl">
                    Shopping Cart
                </h1>

                {cart.length > 0 && (
                    <p className="mt-2 text-sm text-gray-500">
                        {totalItems} {totalItems === 1 ? "item" : "items"}
                    </p>
                )}
            </div>

            {/* Empty Cart */}
            {cart.length === 0 ? (
                <div className="flex min-h-100 flex-col items-center justify-center border border-gray-200 px-6 text-center">
                    <h2 className="text-2xl font-medium text-gray-900">
                        Your cart is empty
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <Link
                        href="/products"
                        className="mt-7 bg-[#9E5B47] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#824936]"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {/* Cart Items */}
                    <section className="lg:col-span-2">
                        <div className="border-t border-gray-200">
                            {cart.map((item) => (
                                <article
                                    key={item.id}
                                    className="flex gap-5 border-b border-gray-200 py-6"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-32 w-24 shrink-0 overflow-hidden bg-[#F8F5F2] md:h-40 md:w-32">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                                                No image
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex min-w-0 flex-1 flex-col">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-[#9E5B47]">
                                                    Saree
                                                </p>

                                                <h2 className="mt-1 text-lg font-medium text-gray-900">
                                                    {item.name}
                                                </h2>
                                            </div>

                                            <p className="shrink-0 text-base font-medium text-gray-900">
                                                ₹
                                                {(item.price * item.quantity).toLocaleString(
                                                    "en-IN"
                                                )}
                                            </p>
                                        </div>

                                        <p className="mt-2 text-sm text-gray-500">
                                            ₹{item.price.toLocaleString("en-IN")} each
                                        </p>

                                        {/* Quantity + Remove */}
                                        <div className="mt-auto flex items-center justify-between pt-5">
                                            <div className="flex w-fit items-center border border-gray-300">
                                                <button
                                                    type="button"
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="px-4 py-2 text-lg transition hover:bg-gray-100"
                                                    aria-label={`Decrease quantity of ${item.name}`}
                                                >
                                                    −
                                                </button>

                                                <span className="min-w-10 text-center text-sm">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() => increaseQuantity(item.id)}
                                                    className="px-4 py-2 text-lg transition hover:bg-gray-100"
                                                    aria-label={`Increase quantity of ${item.name}`}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeItem(item.id)}
                                                className="text-sm text-gray-500 underline underline-offset-4 transition hover:text-red-600"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Continue Shopping */}
                        <Link
                            href="/products"
                            className="mt-6 inline-block text-sm text-[#9E5B47] underline underline-offset-4"
                        >
                            ← Continue Shopping
                        </Link>
                    </section>

                    {/* Order Summary */}
                    <aside className="h-fit border border-gray-200 p-6 md:p-8">
                        <h2 className="text-xl font-medium text-gray-900">
                            Order Summary
                        </h2>

                        <div className="mt-6 space-y-4 border-b border-gray-200 pb-6">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">Subtotal</span>

                                <span className="font-medium text-gray-900">
                                    ₹{subtotal.toLocaleString("en-IN")}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">Shipping</span>

                                <span className="text-gray-900">
                                    Calculated at checkout
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-base font-medium text-gray-900">
                                Total
                            </span>

                            <span className="text-xl font-medium text-gray-900">
                                ₹{subtotal.toLocaleString("en-IN")}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="mt-7 w-full bg-[#9E5B47] px-6 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#824936]"
                        >
                            Proceed to Checkout
                        </button>
                    </aside>
                </div>
            )}
        </main>
    );
};

export default CartPage;