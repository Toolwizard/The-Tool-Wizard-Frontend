import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>The Tool Wizard</h1>
            <p>Useful tools, all in one place.</p>

            <ul>
                <li><Link href="/number-generator">Random Number Generator</Link></li>
                <li><Link href="/timer">Countdown Timer</Link></li>
                <li><Link href="/pdf-splitter">PDF Splitter</Link></li>
            </ul>
        </div>
    );
}
