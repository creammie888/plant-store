"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import "./ProductSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import FavoriteButton from "../../../components/FavoriteButton";

export default function ProductSlider() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/`)
      .then((res) => res.json())
      .then((data) => {
        // สุ่ม 5 ตัวจากทั้งหมด
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setPlants(shuffled.slice(0, 5));
      })
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 7000 }}
        grabCursor={true}
      >
        {plants.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide">
              <img src={`/plants/${item.image_path}`} alt={item.name} />
              <div className="text-overlay">
                <h3>{item.name}</h3>
                <p className="description" lang="th">{item.description}</p>
                <p className="price">฿{item.price}</p>
                <div className="container-btn">
                  <button className="btn-add-cart">Add to cart</button>
                  <FavoriteButton plantId={item.id} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
