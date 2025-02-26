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
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🎲 Random Number Generator</h1>
            <p>Enter a range and generate a random number.</p>

            <div style={{ marginBottom: '20px' }}>
                <input type="number" value={min} onChange={e => setMin(Number(e.target.value))} placeholder="Min" />
                <input type="number" value={max} onChange={e => setMax(Number(e.target.value))} placeholder="Max" />
                <button onClick={generateNumber}>Generate</button>
            </div>

            {randomNumber !== null && <h2>🎉 Your Number: {randomNumber}</h2>}

            <br />
            <Link href="/"><a style={{ color: 'blue', textDecoration: 'underline' }}>🔙 Back to Home</a></Link>
        </div>
    );
}
