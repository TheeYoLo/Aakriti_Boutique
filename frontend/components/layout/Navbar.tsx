"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const Navbar = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const storedCart = localStorage.getItem("cart");

    if (!storedCart) {
      setCartCount(0);
      return;
    }

    try {
      const cart: CartItem[] = JSON.parse(storedCart);

      const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setCartCount(totalQuantity);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    // Get initial cart count
    updateCartCount();

    // Listen for cart changes inside the application
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      router.push("/products");
      return;
    }

    router.push(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-20">

      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Aakriti Boutique"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex gap-4 text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          <li>
            <Link href="/stories">Stories</Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex w-72 items-center rounded-full border border-gray-300 bg-white px-4 py-2"
        >
          <Image
            src="/search.svg"
            width={18}
            height={18}
            alt="Search"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="ml-3 w-full bg-transparent outline-none"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="ml-2 text-gray-400 hover:text-black"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </form>

        {/* Cart */}
        <Link
          href="/cart"
          className="relative cursor-pointer"
          aria-label={`Shopping cart with ${cartCount} items`}
        >
          <Image
            src="/cart.svg"
            width={28}
            height={28}
            alt="cart"
          />

          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9E5B47] px-1 text-[10px] font-semibold text-white">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </Link>

        {/* Profile */}
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Profile"
        >
          <Image
            src="/profile.svg"
            width={28}
            height={28}
            alt="profile"
          />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;