import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#333' }}>The Tool Wizard</h1>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>Useful tools, all in one place.</p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <Link href="/number-generator">
                    <a style={{ textDecoration: 'none', backgroundColor: '#007bff', color: 'white', padding: '15px 30px', margin: '10px', borderRadius: '8px', fontSize: '1.2rem', width: '250px', textAlign: 'center', display: 'block' }}>Random Number Generator</a>
                </Link>
                <Link href="/timer">
                    <a style={{ textDecoration: 'none', backgroundColor: '#28a745', color: 'white', padding: '15px 30px', margin: '10px', borderRadius: '8px', fontSize: '1.2rem', width: '250px', textAlign: 'center', display: 'block' }}>Countdown Timer</a>
                </Link>
                <Link href="/pdf-splitter">
                    <a style={{ textDecoration: 'none', backgroundColor: '#dc3545', color: 'white', padding: '15px 30px', margin: '10px', borderRadius: '8px', fontSize: '1.2rem', width: '250px', textAlign: 'center', display: 'block' }}>PDF Splitter</a>
                </Link>
            </div>
        </div>
    );
}
