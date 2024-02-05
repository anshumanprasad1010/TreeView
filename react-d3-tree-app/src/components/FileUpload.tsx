import React from 'react';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  return (
      <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <p>Choose a .json file to upload</p>
      </div>
  );
};


export default FileUpload;
