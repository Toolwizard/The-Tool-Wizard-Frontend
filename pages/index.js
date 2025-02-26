import Link from 'next/link';

export default function Home() {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>The Tool Wizard 🧙‍♂️</h1>
            <p style={subtitleStyle}>Your magic hub for useful tools!</p>

            <div style={buttonContainerStyle}>
                <Link href="/number-generator">
                    <a style={buttonStyle}>🎲 Random Number Generator</a>
                </Link>
                <Link href="/timer">
                    <a style={buttonStyle}>⏳ Countdown Timer</a>
                </Link>
                <Link href="/pdf-splitter">
                    <a style={buttonStyle}>📄 PDF Splitter</a>
                </Link>
            </div>
        </div>
    );
}

// 🎨 Styles
const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    background: 'linear-gradient(135deg, #fceabb, #f8b500)',
    height: '100vh'
};

const titleStyle = {
    fontSize: '3rem',
    color: '#333',
    fontWeight: 'bold'
};

const subtitleStyle = {
    fontSize: '1.5rem',
    color: '#555'
};

const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px'
};

const buttonStyle = {
    fontSize: '22px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    margin: '10px',
    borderRadius: '10px',
    border: 'none',
    textDecoration: 'none', // ✅ No Underline
    display: 'inline-block',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer'
};

// ✅ Add hover effect
buttonStyle[':hover'] = {
    transform: 'scale(1.05)'
};
