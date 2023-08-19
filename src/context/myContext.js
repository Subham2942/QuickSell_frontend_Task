import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [groupBy, setGroupBy] = useState('status');

  const [ordering, setOrdering] = useState('title');

  

  return (
    <MyContext.Provider value={{ groupBy, setGroupBy,ordering, setOrdering }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}