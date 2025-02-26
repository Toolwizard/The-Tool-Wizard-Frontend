import { useState } from 'react';
import Link from 'next/link';

export default function NumberGenerator() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [randomNumber, setRandomNumber] = useState(null);

    const generateNumber = () => {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(num);
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Comic Sans MS, cursive' }}>
            <h1>🎲 Random Number Generator</h1>
            <p>Enter a range and generate a random number.</p>

            <div style={{ marginBottom: '20px' }}>
                <input type="number" value={min} onChange={e => setMin(Number(e.target.value))} placeholder="Min" />
                <input type="number" value={max} onChange={e => setMax(Number(e.target.value))} placeholder="Max" />
                <button style={buttonStyle} onClick={generateNumber}>✨ Generate a Magic Number ✨</button>
            </div>

            {randomNumber !== null && <h2>🎉 Your Number: {randomNumber}</h2>}

            <br />
            <Link href="/"><a style={backButtonStyle}>🏠 Go Back Home</a></Link>
        </div>
    );
}

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
