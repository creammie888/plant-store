"use client";

import React, { useEffect , useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {FaHeart } from "react-icons/fa";
import "./ProductSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import FavoriteButton from "@/components/FavoriteButton";
import originalProducts from "@/data/products";

export default function ProductSlider() {


  const [isFav, setIsFav] = useState(false);
  
  


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
        {originalProducts.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide">
              <img src={item.image} alt={item.name} />
              <div className="text-overlay">
                <h3>{item.name}</h3>
                <p className="description">
                  {item.description}
                </p>
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
        
