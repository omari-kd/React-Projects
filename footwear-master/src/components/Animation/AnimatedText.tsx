import { useEffect, useState } from "react"
import "./AnimatedText.css"

const messages = [
    "Our biggest sale yet 50% off all summer sale",
    "25% of (almost) everything! use code:summer sale",
]
const AnimatedText: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval)
    }, []);
    return (
        <div className="animated-text-container">
            <div className="animated-text">
                {messages[index]}
            </div>
        </div>
    )
}

export default AnimatedText
