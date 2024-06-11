import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    const [prevPage, setPrevPage] = useState("/");
    function updatePrevPage(newPage) {
        setPrevPage(newPage);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/navigation" element={<Navigation prevPage={prevPage}/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
