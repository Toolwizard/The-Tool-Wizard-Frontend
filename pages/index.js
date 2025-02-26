import Link from 'next/link';

export default function Home() {
    return (
        <div style={{
            textAlign: 'center',
            padding: '50px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <header style={{
                width: '100%',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '2.5rem', color: '#333', margin: 0 }}>The Tool Wizard</h1>
            </header>
            
            <main style={{ marginTop: '100px', maxWidth: '900px', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
                    Explore a collection of simple yet powerful tools to make your life easier.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', maxWidth: '800px' }}>
                    <Link href="/number-generator">
                        <a style={{
                            textDecoration: 'none',
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            fontSize: '1.2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '120px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            🎲 Random Number Generator
                        </a>
                    </Link>
                    
                    <Link href="/timer">
                        <a style={{
                            textDecoration: 'none',
                            backgroundColor: '#28a745',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            fontSize: '1.2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '120px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            ⏳ Countdown Timer
                        </a>
                    </Link>
                    
                    <Link href="/pdf-splitter">
                        <a style={{
                            textDecoration: 'none',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            fontSize: '1.2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '120px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            📄 PDF Splitter
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
