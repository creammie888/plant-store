"use client";

import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./favorite.css";

export default function FavoritesPage() {
  const [plants, setPlants] = useState([]);
  const [favoriteMap, setFavoriteMap] = useState({});

  useEffect(() => {
    // โหลดข้อมูลต้นไม้ทั้งหมด
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/`)
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error loading plants", err));

    // โหลด favorite จาก localStorage
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavoriteMap(JSON.parse(stored));
    }
  }, []);

  const favoritePlants = plants.filter((plant) => favoriteMap[plant.id]);

  return (
    <div className="container">
      <h2>My Favorite Plants</h2>
      <div className="recommend-container">
        {favoritePlants.length > 0 ? (
          favoritePlants.map((plant) => (
            <div className="card-reccommend" key={plant.id}>
              <div className="image-box">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="card-info">
                <p className="name">{plant.name}</p>
                <p className="price">฿{plant.price}</p>
                <FaHeart color="#e96e6e" />
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>
            You haven't added any favorite plants yet.
          </p>
        )}
      </div>
    </div>
  );
}
