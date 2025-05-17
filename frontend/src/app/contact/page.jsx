"use client";
import { useEffect, useState } from "react";
import "./contacts.css"

export default function ContactPage() {

    return (
        <div className="container">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
            <div className="col-container">
                <div className="col-box">
                    <h1>Contact Us </h1>
                    <p>
                        Got questions? We're here to help! <br />
                        Send us a message and we'll get back to you as soon as possible.
                    </p>
                </div>
            </div>
            <div className="col-container1">
                <h3>Contact Infornation</h3>
                <p>Feel free to reach out to us through any of the channels below.</p>
                <div className="col-box1">
                <li>
                    <div className="icon">
                        <i class="bi bi-shop"></i>
                    </div>
                    <p>123 Sukhumvit Road, Khlong Toei,
                    <br />Bangkok 10110, Thailand</p>
                </li>
                <li>
                    <div className="icon">
                        <i class="bi bi-envelope-at-fill"></i>
                    </div>
                    
                    <p>info.11@gmail.com</p>
                </li>
                <li>
                    <div className="icon">
                        <i class="bi bi-telephone"></i>
                    </div>
                    
                    <p>+66 986230846</p>
                </li>
                </div>

            </div>
            <div className="col-image">
                <img src="/bg2.jpg" alt="Plant Image" />
            </div>
            
        </div>

    )
}