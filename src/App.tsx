import React from 'react';
import './App.css';
import Tablet from './Tablet';
import DatabaseClient from './DatabaseClient';

const renderDatabase = (database:Object) => {
  return (Object.entries(database).map((row) => {
    return (<Tablet value={row[0]}/>); 
  }))
}

const App: React.FC = () => {
  const d = new DatabaseClient()
  d.addCol()
  d.addRow()
    
  return (
    <div style={{margin:'10px'}} className="App">
    </div>
  );
}

export default App;
