import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      transitionTime={800}
      stopOnHover={false}
    >
      <div className="heroBanner">
        <div className="bannerContent">
          <h1>Aura. Keep Going</h1>
          <p>Only one way to find out.</p>
        </div>
        <img
          className="heroImage"
          src="/images/hero-banner/hero-banner1.png"
          alt="Banner 1"
        />
      </div>

      <div className="heroBanner">
        <div className="bannerContent">
          <h1>Aura. Go For It</h1>
          <p>Unleash Your Power.</p>
        </div>
        <img
          className="heroImage"
          src="/images/hero-banner/hero-banner2.png"
          alt="Banner 2"
        />
      </div>

      <div className="heroBanner">
        <div className="bannerContent">
          <h1>AURA. Enjoy Life</h1>
          <p>Unleash Your Potential.</p>
        </div>
        <img
          className="heroImage"
          src="/images/hero-banner/hero-banner3.png"
          alt="Banner 3"
        />
      </div>

      <div className="heroBanner">
        <div className="bannerContent">
          <h1>AURA. Stay Calm. Go Ahead</h1>
          <p>Sports</p>
        </div>
        <img
          className="heroImage"
          src="/images/hero-banner/hero-banner4.png"
          alt="Banner 4"
        />
      </div>
    </Carousel>
  );
};

export default HeroBanner;
