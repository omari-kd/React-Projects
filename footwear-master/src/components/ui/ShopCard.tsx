import React from 'react'
import "./ShopCard.css"
const ShopCard: React.FC = () => {
    return (
        <div className='shop-card-container'>
            <div className="men-card-container">
                <div className="men-image-container">
                    <img src="/images/img_bg_3.jpg" alt="Footwear" />
                </div>
                <div className="men-image-title">
                    Shop Men's Collection
                </div>
            </div>

            <div className="women-card-container">
                <div className="women-image-container">
                    <img src="/images/item-10.jpg" alt="Ladies Heel" />
                </div>
                <div className="women-image-title">
                    Shop Women's Collection
                </div>
            </div>
        </div>
    )
}

export default ShopCard
