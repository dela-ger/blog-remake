import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import SingleBlog from './components/SingleBlog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog/:postAuthor' element={<SingleBlog />} />

        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
