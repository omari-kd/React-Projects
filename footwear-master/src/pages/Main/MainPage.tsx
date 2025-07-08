import React, { useEffect, useState } from 'react'
import NavHeader from '../../components/Layout/NavHeader'
import AnimatedText from '../../components/Animation/AnimatedText'
import ImageCarousel from '../../components/Animation/ImageCarousel'
import Quote from '../../components/Layout/Quote';
import ShopCard from '../../components/ui/ShopCard';
import CardItems from '../../components/ui/CardItems';
import TrustedPartners from '../../components/Layout/TrustedPartners';
import Footer from '../../components/Layout/Footer';
import Loadingindicator from '../../components/Animation/Loadingindicator';

const MainPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000)

        return () => clearTimeout(timer)
    }, []);

    if (isLoading) return <Loadingindicator />
    return (
        <>
            {/* The navheader component is located in src/components/layout  */}
            <NavHeader />
            {/* The Animatedtext component is located in src/components/Animation  */}
            <AnimatedText />
            {/* The ImageCarousel component is located in src/components/Animation  */}
            <ImageCarousel />
            {/* The Quote component is located in src/components/Layout  */}
            <Quote />
            {/* The ShopCard component is located in src/components/UI  */}
            <ShopCard />
            {/* The CardItems component is located in src/components/UI  */}
            <CardItems />
            {/* The TrustedPartners component is located in src/components/Layout  */}
            <TrustedPartners />
            {/* The Footer component is located in src/components/Layout  */}
            <Footer />
        </>
    )
}

export default MainPage
