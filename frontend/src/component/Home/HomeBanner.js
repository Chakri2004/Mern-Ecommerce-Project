import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeBanner.css";

const VideoSlide = ({ src, index, selectedSlide, isUserPaused, handleVideoPlay, handleVideoEnd }) => {
  const videoRef = useRef(null); 
  const isSelected = selectedSlide === index;
  useEffect(() => {
    if (videoRef.current) {
      if (isSelected && !isUserPaused) {
        videoRef.current.play().catch(error => {
        });
      } else {
        videoRef.current.pause();
        if (!isSelected) {
             videoRef.current.currentTime = 0;
        }
      }
    }
  }, [isSelected, isUserPaused]);
  return (
    <div className="banner-slide video-container">
      <video
        ref={videoRef}
        src={src}
        type="video/mp4"
        className="banner-video"
        playsInline
        onPlay={handleVideoPlay}
        onEnded={handleVideoEnd}
        disablePictureInPicture 
        preload="auto" 
      />
    </div>
  );
};

const HomeBanner = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0); 
  const totalSlides = 3;
  const handleVideoPlay = () => {
    if (!isUserPaused) {
      setAutoPlay(false); 
      setIsPaused(true); 
    }
  };
  const handleVideoEnd = () => {
    if (!isUserPaused) {
      setAutoPlay(true); 
      setIsPaused(false); 
    }
  };
  const togglePlayPause = () => {
    const newState = !isUserPaused;
    
    setIsUserPaused(newState);
    setAutoPlay(!newState);
    setIsPaused(newState);
  };

  const goToPrev = () => {
    setSelectedSlide((current) => current === 0 ? totalSlides - 1 : current - 1);
    if (isUserPaused === false) { 
      setAutoPlay(true);
      setIsPaused(false);
    }
  };

  const goToNext = () => {
    setSelectedSlide((current) => current === totalSlides - 1 ? 0 : current + 1);
    if (isUserPaused === false) { 
      setAutoPlay(true);
      setIsPaused(false);
    }
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
        <>
            <div className="custom-bottom-left-controls">
                <button
                    type="button"
                    onClick={togglePlayPause}
                    aria-label={isPaused ? "Play Carousel" : "Pause Carousel"}
                    className="custom-control-button pause-play-button"
                >
                    {isPaused ? "▶" : "⏸"}
                </button>
            </div>
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
        </>
      );
    }
    return null;
  };

  return (
    <Carousel
      autoPlay={autoPlay}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      showArrows={false}
      interval={4000}
      transitionTime={800}
      swipeable
      selectedItem={selectedSlide}
      onChange={(index) => {
        if (isUserPaused === false) {
          setAutoPlay(true);
          setIsPaused(false);
        }
        setSelectedSlide(index);
      }}
      renderIndicator={renderCustomControls}
    >
      <div className="banner-slide">
        <img src="/images/homebanner/homebanner1.png" alt="Banner 1" />
      </div>
      <VideoSlide 
        src="/videos/homebanner/homebanner2.mp4"
        index={1}
        selectedSlide={selectedSlide}
        isUserPaused={isUserPaused}
        handleVideoPlay={handleVideoPlay}
        handleVideoEnd={handleVideoEnd}
      />
    </Carousel>
  );
};

export default HomeBanner;