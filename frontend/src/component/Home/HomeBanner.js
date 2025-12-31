import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeBanner.css";

const HomeBanner = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const totalSlides = 2;

  const goToPrev = () => {
    setSelectedSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const goToNext = () => {
    setSelectedSlide((current) =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  };

  const renderBottomControls = ({ onClickHandler, icon, label }) => (
    <button
      type="button"
      onClick={onClickHandler}
      aria-label={label}
      className="custom-control-button"
    >
      {icon}
    </button>
  );

  const renderCustomControls = (clickHandler, isSelected, index) => {
    if (index === 0) {
      return (
        <div className="custom-bottom-right-controls">
          {renderBottomControls({
            onClickHandler: goToPrev,
            label: "Previous Slide",
            icon: "←",
          })}
          {renderBottomControls({
            onClickHandler: goToNext,
            label: "Next Slide",
            icon: "→",
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      showArrows={false}
      interval={4000}
      transitionTime={800}
      swipeable
      selectedItem={selectedSlide}
      onChange={(index) => setSelectedSlide(index)}
      renderIndicator={renderCustomControls}
    >
      <div className="banner-slide">
        <img src="/images/homebanner/homebanner1.png" alt="Banner 1" />
      </div>

      <div className="banner-slide">
        <img src="/images/homebanner/homebanner2.png" alt="Banner 2" />
      </div>
    </Carousel>
  );
};

export default HomeBanner;
