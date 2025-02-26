import { useState, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function NumberGenerator() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [randomNumber, setRandomNumber] = useState(null);
    const [rolling, setRolling] = useState(false);
    const audioRef = useRef(null);

    const generateNumber = () => {
        setRolling(true);
        setRandomNumber(null);

        if (audioRef.current) {
            audioRef.current.play();
        }

        let counter = 0;
        const interval = setInterval(() => {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomNumber(num);
            counter++;

            if (counter >= 30) {
                clearInterval(interval);
                setRolling(false);
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }
            }
        }, 50);
    };

    return (
        <div style={containerStyle}>
            <Head>
                <style>{`
                    @keyframes backgroundAnimation {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    @keyframes sparkle {
                        0% { opacity: 0.3; transform: scale(0.8); }
                        50% { opacity: 1; transform: scale(1.2); }
                        100% { opacity: 0.3; transform: scale(0.8); }
                    }

                    @keyframes pulse {
                        0% { transform: scale(0.5); opacity: 0; }
                        50% { transform: scale(1.1); opacity: 1; }
                        100% { transform: scale(1); opacity: 1; }
                    }

                    body {
                        background: linear-gradient(270deg, #ff758c, #ff7eb3, #ffcc68, #fffc88);
                        background-size: 400% 400%;
                        animation: backgroundAnimation 10s ease infinite;
                    }

                    .roulette-wheel {
                        animation: ${rolling ? "spin 1.5s ease-out" : "none"};
                        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(1080deg); }
                    }

                    .sparkle {
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background-color: white;
                        border-radius: 50%;
                        opacity: 0;
                        animation: sparkle 3s infinite;
                    }
                `}</style>
            </Head>

            <h1>🎰 Magic Number Roulette</h1>
            <p>Spin the wheel and land on a lucky number!</p>

            <div style={{ marginBottom: '20px' }}>
                <input type="number" value={min} onChange={e => setMin(Number(e.target.value))} placeholder="Min" style={inputStyle} />
                <input type="number" value={max} onChange={e => setMax(Number(e.target.value))} placeholder="Max" style={inputStyle} />
                <button style={buttonStyle} onClick={generateNumber} disabled={rolling}>
                    {rolling ? "🔄 Spinning..." : "🎡 Spin the Wheel!"}
                </button>
            </div>

            {/* Roulette Wheel Animation */}
            <div style={{ position: 'relative', height: '200px' }}>
                <img 
                    src="/roulette-wheel.png" 
                    alt="Roulette Wheel"
                    className="roulette-wheel"
                    style={{ 
                        width: '200px', 
                        height: '200px', 
                        transform: rolling ? "rotate(1080deg)" : "rotate(0deg)"
                    }}
                />
            </div>

            {/* Animated Number Reveal */}
            {randomNumber !== null && !rolling && (
                <h2 style={{ fontSize: '3rem', color: '#007bff', animation: 'pulse 1s ease-out' }}>
                    🎉 Your Lucky Number: {randomNumber}
                </h2>
            )}

            {/* Sound Effect */}
            <audio ref={audioRef}>
                <source src="/roulette-spin.mp3" type="audio/mpeg" />
            </audio>

            <br />
            <Link href="/"><a style={backButtonStyle}>🏠 Go Back Home</a></Link>
        </div>
    );
}

// Styles
const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Comic Sans MS, cursive',
    position: 'relative',
};

const buttonStyle = {
    fontSize: '20px',
    fontFamily: 'Comic Sans MS, cursive',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    margin: '10px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    display: 'inline-block'
};

const backButtonStyle = {
    fontSize: '20px',
    fontFamily: 'Comic Sans MS, cursive',
    color: '#007bff',
    textDecoration: 'none',
    padding: '10px 15px',
    display: 'inline-block',
};

const inputStyle = {
    fontSize: '18px',
    padding: '10px',
    margin: '5px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '80px'
};
