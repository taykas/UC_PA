import { useState, useEffect } from "react";
import "./Exercicio6.css"

export const Exercicio6 = () => {
    const [activeColor, setActiveColor] = useState("red");

    useEffect(() => {
        const sequence = ["red", "yellow", "green"]
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % sequence.length
            setActiveColor(sequence[index])
        }, 3000);

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="TrafficLight">
            {/* classeBase classeColocada ${}*/}
            {/* <div className={`light red ${activeLight === "red" ? "active" : ""}`}></div> */}
            
            <div className={`light red ${activeColor === "red" ? "active" : ""}`}></div>
            <div className={`light yellow ${activeColor === "yellow" ? "active" : ""}`}></div>
            <div className={`light green ${activeColor === "green" ? "active" : ""}`}></div>
        </div>
    )
}