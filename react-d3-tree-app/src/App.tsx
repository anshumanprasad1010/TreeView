import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import HierarchicalTreeView from './components/HierarchyTreeView';
import axios from 'axios';

const App: React.FC = () => {

  const [jsonData, setJsonData] = useState<any|null>([]);

     const handleFileUpload = (file: File) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          if(e.target && typeof e.target.result === 'string')
          {
          const data = JSON.parse(e.target.result);
          setJsonData(data);
          const response = await axios.post('http://localhost:5000/data', data); 
          console.log(response);         
        }
        } catch (error) {
          console.error('Error storing JSON:', error);
        }
      };
        reader.readAsText(file, 'utf-8');
  };


  return (
    <div>
      <h1>Tree View</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {jsonData && <HierarchicalTreeView treeData={jsonData} />}
    </div>
  );
};


export default App ;