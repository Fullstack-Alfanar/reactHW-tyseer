import React, { useEffect, useState } from "react";
//child
export default function Clock() {
    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div className="myClock">
            <label>{time}</label>
        </div>
        );
}