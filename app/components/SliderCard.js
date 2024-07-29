// Suggested code may be subject to a license. Learn more: ~LicenseLog:1755632814.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:407385081.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1345528385.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2549218239.
// app/components/SliderCard.js
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './SliderCard.module.css';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1352519522.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3615591365.

function SliderCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div>
          <p className={styles.testLabel}>test</p>
          <img 
            className={styles.img}
            src="https://plus.unsplash.com/premium_photo-1720760948879-d10510c7049c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slider Image 1" 
          />
        </div>
        <div>
          <img 
            className={styles.img}
            src="https://plus.unsplash.com/premium_photo-1661962901887-a41c1e30d6d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slider Image2" 
          />
        </div>
        <div>
          <img 
            className={styles.img}
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slider Image 3" 
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderCard;
