import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider">
            <button className="left-arrow" onClick={prevSlide}>
                &#10094;
            </button>
            <div
                className="slider-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide.image} alt={`slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="right-arrow" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? 'dot active' : 'dot'}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;