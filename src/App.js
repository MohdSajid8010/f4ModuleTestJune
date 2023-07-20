import React, { useState } from 'react';
import './App.css';
import HomePage from './Component/HomePage';
import Detailpost from "./Component/Detailpost"
import { Routes, Route } from 'react-router-dom';
const App = () => {
  let [id, setId] = useState("");
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<HomePage setId={setId}/>} />
        <Route path={`/item/${id}`} element={<Detailpost />} />
      </Routes>


    </div>
  );
}

export default App;
