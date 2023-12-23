import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListResto from './components/ListResto';
import DetailResto from './components/DetailResto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListResto />} />
        <Route path="/detail/:location_id" element={<DetailResto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
