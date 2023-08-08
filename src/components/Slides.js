import React, { useState } from 'react';

function Slides({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToFirstSlide = () => {
    setCurrentSlideIndex(0);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={goToFirstSlide}
          disabled={currentSlideIndex === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={goToNextSlide}
          disabled={currentSlideIndex === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;