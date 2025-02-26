import { useState } from 'react';
import Link from 'next/link';

export default function PdfSplitter() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const splitPdf = async () => {
        if (!selectedFile) {
            alert('Please select a PDF file first.');
            return;
        }
        alert('PDF splitting functionality is under development!');
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1>📄 PDF Splitter</h1>
            <p>Upload a PDF and split it into separate pages.</p>

            <input type="file" accept="application/pdf" onChange={handleFileUpload} />
            <button onClick={splitPdf}>Split PDF</button>

            {selectedFile && <p>Selected File: {selectedFile.name}</p>}

            <br />
            <Link href="/"><a style={{ color: 'blue', textDecoration: 'underline' }}>🔙 Back to Home</a></Link>
        </div>
    );
}
