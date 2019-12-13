import React, { useReducer } from "react";

interface DatabaseContextType {
    state: any,
    dispatch: any
}

const Database = React.createContext<DatabaseContextType>({
    state:  null,
    dispatch: null
});

export default Database;
