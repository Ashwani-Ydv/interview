import React, { useState } from "react";
// import "./styles.css";

export default function App() {
    const [second, setSecond] = useState(0);

    const handleReset = () => {
        setSecond(0);
    };
    // const handleStart = () => {
    //   setInterval(() => {
    //     setSecond(second + 1);
    //   }, 1000);
    //   console.log("second", second);
    // };

    const handleStop = () => {
        clearInterval();
    };

    return (
        <div className="App">
            <h1>Stop watch</h1>
            {second}
            <div>
                <button
                    onClick={setInterval(() => {
                        setSecond(second + 1);
                    }, 1000)}
                >
                    start
                </button>
                <button onClick={handleStop}>stop</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </div>
    );
}
