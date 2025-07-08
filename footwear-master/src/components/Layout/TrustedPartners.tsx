import React from 'react'
import "./TrustedPartners.css"
type Logos = {
    image: string
}

const logoImages: Logos[] = [
    {
        image: "/images/brand-1.jpg"
    },
    {
        image: "/images/brand-2.jpg"
    },
    {
        image: "/images/brand-3.jpg"
    },
    {
        image: "/images/brand-4.jpg"
    },
    {
        image: "/images/brand-5.jpg"
    }
]

const TrustedPartners: React.FC = () => {
    return (
        <div className='trusted-partners-container'>
            <div className="trusted-partner-header">
                <h3>TRUSTED PARTNERS</h3>
            </div>

            <div className="trusted-logo-container">
                {logoImages.map((logoImages, index) => (
                    <div className="trusted-partners-logos" key={index}>
                        <img src={logoImages.image} alt="" />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default TrustedPartners
