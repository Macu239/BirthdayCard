import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './pages';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <main>
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
