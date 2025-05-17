"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductSlider from "@/components/ProductSlider";
import FavoriteButton from "@/components/FavoriteButton";
import { handleAddToCart } from "@/utils/cart";
import Link from "next/link";
import "./catalog.css";

export default function CatalogPage() {
  const [plants, setPlants] = useState([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }
        return response.json();
      })
      .then((data) => {
        if (searchTerm) {
          // กรองต้นไม้ที่ชื่อ หรือชื่อไทย หรือคำอธิบาย เริ่มต้นด้วย searchTerm เท่านั้น
          const filtered = data.filter((plant) => {
            const name = plant.name.toLowerCase();
            const nameTh = plant.name_th ? plant.name_th.toLowerCase() : "";
            const desc = plant.description ? plant.description.toLowerCase() : "";

            return (
              name.startsWith(searchTerm) ||
              nameTh.startsWith(searchTerm) ||
              desc.startsWith(searchTerm)
            );
          });
          setPlants(filtered);
        } else {
          setPlants(data);
        }
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, [searchTerm]);

  return (
    <div className="catalog-container">
      <ProductSlider />
      <div className="catalog-content">
        <h1>All Products</h1>
        <div className="products-container">
          {plants.length === 0 ? (
            <p>No plants found matching "{searchTerm}"</p>
          ) : (
            plants.map((plant) => (
              <div key={plant.id} className="product">
                <Link className="image-box" href={`/product/${plant.id}`}>
                  <img src={`/plants/${plant.image_path}`} alt={plant.name} />
                </Link>
                <div className="card-info">
                  <p className="name">{plant.name}</p>
                  <div className="card-info-row">
                    <p className="price">฿{plant.price}</p>
                    <div className="container-btn2">
                      <button
                        className="btn-add-cart2"
                        onClick={() => handleAddToCart(plant)}
                      >
                        +
                      </button>
                      <FavoriteButton plantId={plant.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
