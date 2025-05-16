"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);

  const [searchText, setSearchText] = useState("");
  // const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    // setIsClient(true);
    const updateCounts = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const storedFavObj = JSON.parse(localStorage.getItem("favorites")) || {};
      const storedFavArray = Object.entries(storedFavObj)
        .filter(([_, value]) => value === true)
        .map(([key]) => parseInt(key));
      const cartTotal = storedCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(cartTotal);
      setFavCount(storedFavArray.length);
    };

    updateCounts();

    const interval = setInterval(updateCounts, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (pathname === "/catalog") {
      // เปลี่ยน URL query param แบบ real-time ขณะพิมพ์
      const timeout = setTimeout(() => {
        router.push(`/catalog?search=${encodeURIComponent(searchText)}`, { shallow: true });
      }, 300); // ดีเลย์ 300ms เพื่อไม่ให้ push บ่อยเกินไป

      return () => clearTimeout(timeout);
    }
  }, [searchText, pathname, router]);

    return (
      <nav>
        <div className="logo">
          <img className="logo-img"src="/logo.png" alt="Logo" />
        </div>
        <div className="nav-bar">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="/">Home</a>
            <a href="/catalog">Catalog</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="nav-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="icons">
            <div className="icon-container">
              <Link href="/favorites">
                <button className="btn-fav"><FaHeart /></button>
              </Link>
              {ready && favCount > 0 && (
                <div className="quantity-container">{favCount}</div>
              )}
            </div>
            <div className="icon-container">
              <Link href="/order">
                <button className="btn-cart"><FaShoppingCart /></button>
              </Link>
              {cartCount > 0 && (
                <div className="quantity-container">{cartCount}</div>
              )}
            </div>
          </div>
        </div>

        </div>
      </nav>
    );
  }
