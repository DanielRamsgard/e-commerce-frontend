import './App.css';
import React from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/navigation" element={<Navigation />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
