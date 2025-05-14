// FavoriteButton.jsx
"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

export default function FavoriteButton({ plantId }) {
  const [isFav, setIsFav] = useState(false);

  // โหลดข้อมูลจาก localStorage เมื่อ component ถูก mount
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      const favMap = JSON.parse(stored);
      setIsFav(favMap[plantId] || false);
    }
  }, [plantId]);
  

  // toggle fav และบันทึกลง localStorage
  const toggleFavorite = () => {
    setIsFav((prev) => {
      const newStatus = !prev;
      const stored = JSON.parse(localStorage.getItem("favorites")) || {};
      stored[plantId] = newStatus;
      localStorage.setItem("favorites", JSON.stringify(stored));
      return newStatus;
    });
  };

  return (
    <button
      className="btn-fav-slider"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}
      style={{ color: isFav ? "#e96e6e" : "#333" }}
    >
      {isFav ? <FaHeart /> : <LuHeart />}
    </button>
  );
}
