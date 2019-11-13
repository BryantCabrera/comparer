import React, { useState } from 'react';
import Tablet from "./Tablet";

interface LooseObject{
  [key: string]: string;
}

const Row: React.FC<{ rowName: string, row: LooseObject }> = ({rowName, row}) =>{
  let [name, setName] = useState(rowName)
    
   return (
    <div></div>
    // playing with row name col name of this hook thing
       // not sure how much i need a database given hooks
   ) 
}
