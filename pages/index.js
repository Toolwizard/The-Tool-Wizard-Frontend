import Link from 'next/link';

export default function Home() {
    return (
        <div style={pageContainer}>
            {/* 🏆 Navigation Bar */}
            <nav style={navbarStyle}>
                <div style={logoStyle}>🧙‍♂️ The Tool Wizard</div>
                <div style={navLinks}>
                    <Link href="/"><a style={navLink}>Home</a></Link>
                    <Link href="/about"><a style={navLink}>About</a></Link>
                    <Link href="/contact"><a style={navLink}>Contact</a></Link>
                </div>
            </nav>

            {/* ✨ Hero Section */}
            <header style={heroStyle}>
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
    background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
    color: 'white',
    minHeight: '100vh',
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
};

navLink[":hover"] = {
    color: '#ffcc00',
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

heroButton[":hover"] = {
    transform: 'scale(1.05)',
};

/* 🛠️ Tool Grid */
const toolsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '50px 30px',
    justifyContent: 'center',
    alignItems: 'center',
};

/* 🔧 Tool Card */
const toolCard = {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

toolCard[":hover"] = {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)',
};

/* 🛠️ Individual Tool Styles */
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

/* 🛠️ Tools List */
const tools = [
    { name: "🎲 Random Number Generator", link: "/number-generator", icon: "🎰", description: "Generate a magic number within a custom range." },
    { name: "⏳ Countdown Timer", link: "/timer", icon: "⏳", description: "Set a countdown timer for any task." },
    { name: "📄 PDF Splitter", link: "/pdf-splitter", icon: "📄", description: "Upload a PDF and split it into pages." },
    { name: "🍲 Custom Recipe Generator", link: "/recipe-generator", icon: "🍲", description: "Create custom recipes based on ingredients." },
    { name: "🖼️ Image Compressor", link: "/image-compressor", icon: "🖼️", description: "Reduce image size without losing quality." },
];

