import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.fontFamily = 'Arial, sans-serif';
    }, []);

    return (
        <div style={{
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
            padding: '50px'
        }}>
            <header style={{
                width: '100%',
                padding: '20px 0',
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '3rem', color: '#333', margin: 0, fontWeight: 'bold' }}>The Tool Wizard</h1>
            </header>
            
            <main style={{ marginTop: '120px', maxWidth: '900px', textAlign: 'center' }}>
                <p style={{ fontSize: '1.4rem', color: '#555', marginBottom: '40px' }}>
                    Discover powerful tools designed to make your life easier.
                </p>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    maxWidth: '800px'
                }}>
                    {[
                        { href: '/number-generator', text: '🎲 Random Number Generator', color: '#007bff' },
                        { href: '/timer', text: '⏳ Countdown Timer', color: '#28a745' },
                        { href: '/pdf-splitter', text: '📄 PDF Splitter', color: '#dc3545' }
                    ].map((tool, index) => (
                        <Link key={index} href={tool.href}>
                            <a 
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    textDecoration: 'none',
                                    backgroundColor: tool.color,
                                    color: 'white',
                                    padding: '20px',
                                    borderRadius: '12px',
                                    fontSize: '1.2rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '140px',
                                    boxShadow: hovered === index ? '0 6px 12px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    transform: hovered === index ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'all 0.3s ease-in-out'
                                }}
                            >
                                {tool.text}
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
            
            <footer style={{
                marginTop: '50px',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '1rem', color: '#666' }}>© 2025 The Tool Wizard. All rights reserved.</p>
            </footer>
        </div>
    );
}
