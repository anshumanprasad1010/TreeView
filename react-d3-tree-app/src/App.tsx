import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import HierarchicalTreeView from './components/HierarchyTreeView';
import axios from 'axios';

const App: React.FC = () => {

  const [jsonData, setJsonData] = useState<any|null>(null);
  const [view, setInputValue] = useState(true);

     const handleFileUpload = (file: File) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          if(e.target && typeof e.target.result === 'string')
          {
          const data = JSON.parse(e.target.result);
          setJsonData(data);
          setInputValue(false);
          const response = await axios.post('https://treeview-pcif.onrender.com/data', data); 
          console.log(response);         
        }
        } catch (error) {
          console.error('Error storing JSON:', error);
        }
      };
        reader.readAsText(file, 'utf-8');
  };

  const handleReset = () => {
    setInputValue(true);
  };


  return (
    <div>
      <h1>Tree View</h1>
      <div className='btns'>
      {view ? <FileUpload onFileUpload={handleFileUpload} /> : 
      (<button onClick={handleReset}>Upload again</button>)}
      </div>
      {jsonData && <HierarchicalTreeView treeData={jsonData} />}
    </div>
  );
};


export default App ;