import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Timer() {
    const [seconds, setSeconds] = useState(10);
    const [timeLeft, setTimeLeft] = useState(10);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        setTimeLeft(seconds);
        setIsRunning(true);
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1>⏳ Countdown Timer</h1>
            <p>Enter seconds and start the countdown.</p>

            <input type="number" value={seconds} onChange={e => setSeconds(Number(e.target.value))} />
            <button onClick={startTimer}>Start Timer</button>

            <h2>{timeLeft} seconds left</h2>

            <br />
            <Link href="/"><a style={{ color: 'blue', textDecoration: 'underline' }}>🔙 Back to Home</a></Link>
        </div>
    );
}
