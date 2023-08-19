import { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [groupBy, setGroupBy] = useState(localStorage.getItem('group') || 'status');

  const [ordering, setOrdering] = useState(localStorage.getItem('order') || 'title');

  //In order to preserve state even after releading, I have decided to store the state in localstorage
  useEffect(() => {
    const savedState =
    { 
      group: localStorage.getItem('group'),
      order: localStorage.getItem('order')
    }
    if (savedState) {
      setGroupBy(savedState.group);
      setOrdering(savedState.order);
    }
  }, []);

  // Save state to localStorage on change
  useEffect(() => {
    localStorage.setItem('group', groupBy);
    localStorage.setItem('order', ordering);

    console.log(localStorage.getItem('group'), localStorage.getItem('order'))
  }, [groupBy, ordering]);


  return (
    <MyContext.Provider value={{ groupBy, setGroupBy, ordering, setOrdering }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}