import React, { useState } from 'react';
import "./PDFUpload.css";

const PDFUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setMessage(`Selected file: ${selectedFile.name}`);
    } else {
      setMessage('Please upload a valid PDF file.');
      setFile(null);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setMessage('No file selected. Please choose a PDF file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      // Replace this URL with your backend endpoint
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('File uploaded successfully!');
      } else {
        setMessage('Failed to upload file. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred during file upload.');
    }
  };

  return (
    <div className="pdf-upload-container">
      <h2>Upload a PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
      <p>{message}</p>
    </div>
  );
};

export default PDFUpload;
