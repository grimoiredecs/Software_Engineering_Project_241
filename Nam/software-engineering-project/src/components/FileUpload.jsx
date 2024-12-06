import React, { useState } from 'react';
import axios from 'axios';
import styles from './FileUpload.module.css';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setFilename(selectedFile.name);
            setError('');
        } else {
            setError('Please upload a PDF file.');
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            setError('Error uploading file.');
        }
    };

    return (
        <div className={styles.uploadContainer}>


            <div className={styles.uploadOptionContainer}>
                <input type="file" onChange={handleFileChange} className={styles.uploadFile} />

                <button onClick={handleUpload}>
                    Upload PDF
                </button>
            </div>

            {filename && 
            <div className={styles.filename}>
                {filename}
            </div>}
            
            {file && (
                <iframe
                    src={URL.createObjectURL(file)}
                    title="PDF Preview"
                    className={styles.pdfPreview}
                />
            )}
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    );
};

export default FileUpload;