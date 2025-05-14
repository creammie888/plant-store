import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import Link from "next/link";
export default function Navbar() {
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
            </div>
            <div className="icon-container">
              <Link href="/order">
                <button className="btn-cart"><FaShoppingCart /></button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  