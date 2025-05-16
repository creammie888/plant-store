"use client"
import { useEffect, useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import Link from "next/link";
export default function Navbar() {

  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

    return (
      <nav>
        <div className="nav-container">
          <a href="/">Home</a>
          <a href="/catalog">Catalog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="logo">
          <img className="logo-img"src="/logo.png" alt="Logo" />
        </div>
        <div className="nav-container">
          <div className="search-bar">
            <input type="text" placeholder="search" />
            <FaSearch className="search-icon" />
          </div>
          <div className="icons">
            <div className="icon-container">
              <Link href="/favorites">
                <button className="btn-fav"><FaHeart /></button>
              </Link>
              {isClient && (
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
      </nav>
    );
  }
  