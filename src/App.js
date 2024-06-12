import React, { useState } from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoriesAll from './components/CategoriesAll';
import Furniture from './components/Furniture';
import Electronics from './components/Electronics';
import Lamps from './components/Lamps';
import Kitchen from './components/Kitchen';
import Chairs from './components/Chairs';
import Skincare from './components/Skincare';


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
                <Route path="/categories/all" element={<CategoriesAll prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/furniture" element={<Furniture prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/electronics" element={<Electronics prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/lamps" element={<Lamps prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/kitchen" element={<Kitchen prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/chairs" element={<Chairs prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/skincare" element={<Skincare prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
