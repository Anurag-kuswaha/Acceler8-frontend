import React from 'react';
import UploadForm from './components/UploadForm';
import RetrieveForm from './components/RetrieveForm';
import SearchByNameForm from './components/SearchByNameForm';
import './App.css';

const App = () => {
  return (
    <div className="container grid grid-col-1 md:grid-cols-3 p-4">
      <UploadForm />
      <SearchByNameForm />
      <RetrieveForm />
     
    </div>
  );
};

export default App;