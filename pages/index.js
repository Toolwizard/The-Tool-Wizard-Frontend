import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={pageContainer}>
            <Head>
                <style>{`
                    @keyframes backgroundShift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    body {
                        background: linear-gradient(270deg, #0a0a0a, #1a1a1a, #2a2a2a);
                        background-size: 400% 400%;
                        animation: backgroundShift 10s ease infinite;
                        overflow-x: hidden;
                        margin: 0;
                    }
                `}</style>
            </Head>

            {/* 🏆 Navigation Bar */}
            <nav style={navbarStyle}>
                <div style={logoStyle}>🧙‍♂️ The Tool Wizard</div>
                <div style={navLinks}>
                    <Link href="/"><a style={navLink}>Home</a></Link>
                    <Link href="/about"><a style={navLink}>About</a></Link>
                    <div style={dropdownContainer}>
                        <span style={navLink}>Tools ▼</span>
                        <div style={dropdownMenu}>
                            <Link href="/number-generator"><a style={dropdownItem}>🎲 Number Generator</a></Link>
                            <Link href="/timer"><a style={dropdownItem}>⏳ Countdown Timer</a></Link>
                            <Link href="/pdf-splitter"><a style={dropdownItem}>📄 PDF Splitter</a></Link>
                            <Link href="/recipe-generator"><a style={dropdownItem}>🍲 Recipe Generator</a></Link>
                            <Link href="/image-compressor"><a style={dropdownItem}>🖼️ Image Compressor</a></Link>
                        </div>
                    </div>
                    <Link href="/contact"><a style={navLink}>Contact</a></Link>
                </div>
            </nav>

            {/* ✨ Hero Section */}
            <header style={{ ...heroStyle, transform: `translateY(${scrollY * 0.3}px)` }}>
                <h1 style={heroTitle}>Powerful Tools, All in One Place</h1>
                <p style={heroSubtitle}>Explore a world of utilities designed to simplify your tasks.</p>
                <Link href="/tools"><a style={heroButton}>Explore Tools 🔍</a></Link>
            </header>

            {/* 🛠️ Tool Grid Section */}
            <section style={toolsGrid}>
                {tools.map((tool, index) => (
                    <Link href={tool.link} key={index}>
                        <a style={toolCard}>
                            <div style={toolIcon}>{tool.icon}</div>
                            <h2 style={toolTitle}>{tool.name}</h2>
                            <p style={toolDescription}>{tool.description}</p>
                        </a>
                    </Link>
                ))}
            </section>
        </div>
    );
}

/* 🎨 Styles */
const pageContainer = {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    color: 'white',
    minHeight: '100vh',
    overflowX: 'hidden',
};

/* 🔝 Navigation Bar */
const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
};

const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    whiteSpace: 'nowrap',
};

const navLinks = {
    display: 'flex',
    gap: '20px',
};

const navLink = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap',
};

const dropdownContainer = {
    position: 'relative',
    display: 'inline-block',
};

const dropdownMenu = {
    display: 'none',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.3)',
    borderRadius: '8px',
    padding: '10px',
    flexDirection: 'column',
    minWidth: '180px',
};

dropdownContainer[":hover"] = {
    dropdownMenu: { display: 'block' },
};

const dropdownItem = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
    display: 'block',
    transition: 'background 0.3s ease',
};

dropdownItem[":hover"] = {
    backgroundColor: '#007bff',
};

/* 🎆 Hero Section */
const heroStyle = {
    textAlign: 'center',
    padding: '150px 20px 80px',
    background: 'linear-gradient(135deg, #222, #444)',
    marginTop: '60px',
};

const heroTitle = {
    fontSize: '3rem',
    fontWeight: 'bold',
};

const heroSubtitle = {
    fontSize: '1.5rem',
    color: '#bbb',
};

const heroButton = {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 30px',
    marginTop: '20px',
    borderRadius: '8px',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'transform 0.2s ease-in-out',
};

const toolsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '50px 30px',
};

const toolCard = {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const toolIcon = {
    fontSize: '3rem',
    marginBottom: '10px',
};

const toolTitle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
};

const toolDescription = {
    fontSize: '1rem',
    color: '#bbb',
};

const tools = [
    { name: "🎲 Random Number Generator", link: "/number-generator", icon: "🎰", description: "Generate a magic number within a custom range." },
    { name: "⏳ Countdown Timer", link: "/timer", icon: "⏳", description: "Set a countdown timer for any task." },
    { name: "📄 PDF Splitter", link: "/pdf-splitter", icon: "📄", description: "Upload a PDF and split it into pages." },
    { name: "🍲 Custom Recipe Generator", link: "/recipe-generator", icon: "🍲", description: "Create custom recipes based on ingredients." },
    { name: "🖼️ Image Compressor", link: "/image-compressor", icon: "🖼️", description: "Reduce image size without losing quality." },
];
