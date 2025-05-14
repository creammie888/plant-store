"use client";
import { useEffect, useState } from "react";
import ProductSlider from "@/components/ProductSlider";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";
import "./catalog.css";

export default function CatalogPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }
        return response.json();
      })
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  return (
    <div className="catalog-container">
      <ProductSlider />
      <div className="catalog-content">
        <h1>All Products</h1>
        <div className="products-container">
          {plants.map((plant) => (
            <Link href={`/product/${plant.id}`} key={plant.id} className="product">
              <div className="image-box">
                <img src={`/plants/${plant.image_path}`} alt={plant.name} />
              </div>
              <div className="card-info">
                <p className="name">{plant.name}</p>
                <div className="card-info-row">
                  <p className="price">฿{plant.price}</p>
                  <div className="container-btn2">
                    <button className="btn-add-cart2">+</button>
                    <FavoriteButton plantId={plant.id} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
