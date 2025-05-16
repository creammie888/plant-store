"use client";

import React, { useEffect, useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
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
    <div className="fav-page-container">
      <h2><span>My Favorite</span> Plants</h2>
      <div className="fav-container">
        {favoritePlants.length > 0 ? (
          favoritePlants.map((plant) => (
            <div className="fav-product-container" key={plant.id}>
              <div className="fav-image-box">
                <img src={`/plants/${plant.image_path}`} alt={plant.name} />
                <div className="card-info">
                  <p className="name">{plant.name}</p>
                  <p className="price">฿{plant.price}</p>
                </div>
              </div>
              <div className="btn-fav3"><FavoriteButton plantId={plant.id} /></div>
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
