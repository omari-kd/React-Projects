import React from 'react'
import "./CardItems.css"
type Items = {
    image: string,
    title: string,
    price: string
}

const items: Items[] = [
    {
        image: "images/item-1.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-2.jpg",
        title: "Women's Minam Meaghan",
        price: '$139.00'
    },
    {
        image: "images/item-3.jpg",
        title: "Men's Taja Commissioner",
        price: '$139.00'
    },
    {
        image: "images/item-4.jpg",
        title: "Russ Men's Sneakers",
        price: '$139.00'
    },
    {
        image: "images/item-5.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-6.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-7.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-8.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-9.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-10.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-11.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-12.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-13.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-14.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-15.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
    {
        image: "images/item-16.jpg",
        title: "WOMEN'S BOOTS SHOES MACA",
        price: '$139.00'
    },
]

const CardItems: React.FC = () => {
    return (
        <div className='card-items-container'>
            <div className="card-item-header">
                <h1>Best Sellers</h1>
            </div>
            <div className="card-items">
                {items.map((item, index) => (
                    <div className="card-item" key={index}>
                        <div className="card-item-image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="card-item-title">
                            {item.title}
                        </div>
                        <div className="card-item-price">{item.price}</div>
                    </div>
                ))}
            </div>
            <div className="shop-all-product-container">
                <div className="shop-all-product-link">
                    <a href="#">Shop All Products</a>
                </div>
            </div>
        </div>
    )
}

export default CardItems
