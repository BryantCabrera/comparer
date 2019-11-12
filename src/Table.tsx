import React from 'react';
import DatabaseClient from './DatabaseClient';

const Table: React.FC = () => {
    const client = new DatabaseClient()
    return (
       <div style={{display:'flex'}}>
        {
          client.getColumns().map(colName => <span> {colName} </span> )
        }  
       </div> 
    )
}




export default Table;
