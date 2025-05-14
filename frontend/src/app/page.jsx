"use client";
import { useEffect, useState } from "react";
import { FaShippingFast, FaBoxOpen, FaTag } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./home.css";
import "swiper/css";
import "swiper/css/pagination";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/`)
      .then((response) => response.json())
      .then((data) => {
        const top8 = data.slice(0, 8); // แสดงแค่ 8 อันดับแรก
        setPlants(top8);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  return (
    <div className="container">
      <div className="home-page-container">
        <div className="background-container">
          <img src="./bg/4.png" alt="background" />
        </div>
        <div className="home-page-quotation">
          Place a plant near your window to boost<span> mood</span> and <span>air quality</span> <br />
          <button className="btn-continue">
            shop now →
          </button>
        </div>
      </div>

      <div className="home-page-container2">
        <div className="good-card">
          <div className="card-box">
            <div className="icon"><FaBoxOpen /></div>
            <p>Free Shipping</p>
          </div>
          <div className="card-box">
            <div className="icon"><FaShippingFast /></div>
            <p>Fast Delivery</p>
          </div>
          <div className="card-box">
            <div className="icon"><FaTag /></div>
            <p>Best Price</p>
          </div>
        </div>
      </div>

      <div className="home-page-container3">
        <div className="about-us">
          <img className="bg2" src="/bg3.jpg" alt="img" />
          <div className="text-overlay">
            <span>"Breathe fresh air in every space with our premium air-purifying plants."</span>
            <p>
              Discover a wide selection of carefully chosen air-purifying plants, each one meticulously selected to ensure a perfect balance between natural beauty and health benefits. Our plants not only enhance the aesthetic appeal of your space but also purify the air, creating a refreshing and serene environment for you and your loved ones. Breathe cleaner, live healthier, and surround yourself with the calming touch of nature every day. 🌱
            </p>
          </div>
        </div>

        <p className="heading-recommend">Our <span>Plants</span></p>

        <div className="recommend-container">
          <div className="swiper-container">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={4}
              slidesPerGroup={4}
              loop={true}
              grabCursor={true}
            >
              {plants.map((plant) => (
                <SwiperSlide key={plant.id}>
                  <Link href={`/product/${plant.id}`} className="card-reccommend">
                    <div className="image-box">
                      <img src={`/plants/${plant.image_path}`} alt={plant.name} />
                    </div>
                    <div className="card-info">
                      <p className="name">{plant.name}</p>
                      <div className="card-info-row">
                        <p className="price">฿{plant.price}</p>
                        <div className="container-btn">
                          <button className="btn-add-cart">+</button>
                          <FavoriteButton plantId={plant.id} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
