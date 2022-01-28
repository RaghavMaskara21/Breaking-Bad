import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/ui/Header';

const App = () =>{
  const [items, setItems]= useState([])
  const [isLoading, setIsLoading]= useState(true);

  

  return (
    <div className="Container">
      <Header/>
    </div>
  )
}

export default App;
