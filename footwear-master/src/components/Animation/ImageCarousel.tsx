import { useEffect, useState } from "react"
import "./ImageCarousel.css"
import React from 'react';

type Slide = {
    image: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    link: string;
}

const slides: Slide[] = [
    {
        image: "/images/img_bg_1.jpg",
        title: "MEN'S",
        subtitle1: "SHOES",
        subtitle2: "COLLECTION",
        subtitle3: "New trending shoes",
        link: "#"
    },
    {
        image: "/images/img_bg_2.jpg",
        title: "WOMEN'S",
        subtitle1: "BAGS",
        subtitle2: "COLLECTION",
        subtitle3: "Summer Styles 2025",
        link: "#"
    },
    {
        image: "/images/img_bg_3.jpg",
        title: "UNISEX",
        subtitle1: "ACCESSORIES",
        subtitle2: "TRENDING",
        subtitle3: "Latest arrivals",
        link: "#"
    }
];
const ImageCarousel: React.FC = () => {
    const [currentIndex, setIndex] = useState(0);
    const [fade, setFade] = useState<boolean>(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % slides.length)
                setFade(true);
            }, 500)

        }, 4000);
        return () => clearInterval(interval)
    }, [])

    const currentSlide = slides[currentIndex];
    return (
        <div className="image-background-container">
            <div className={`carousel-image ${fade ? "fade-in" : "fade-out"}`} style={{ backgroundImage: `url(${currentSlide.image})` }}></div>

            <div className={`image-text-container ${fade ? "fade-in" : "fade-out"}`}>
                <div className="text-title">{currentSlide.title}</div>
                <div className="text-subtitle-1">{currentSlide.subtitle1}</div>
                <div className="text-subtitle-2">{currentSlide.subtitle2}</div>
                <div className="text-subtitle-3">{currentSlide.subtitle3}</div>
                <div className="shop-link"><a href={currentSlide.link}>Shop Collection</a></div>
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <span key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel
