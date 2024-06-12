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
import Product from './components/Product';


function App() {
    const [prevPage, setPrevPage] = useState("/");
    const [imgOne, setImgOne] = useState("/static/media/spanish.jpeg");
    const [imgTwo, setImgTwo] = useState("/static/media/spanish1.jpeg");
    const [imgThree, setImgThree] = useState("/static/media/spanish2.jpeg");
    const [description, setDescription] = useState("Sink into the plush cushions, enveloped in soft, velvety upholstery that invites you to unwind after a long day. The ergonomic design ensures optimal support for your back, neck, and shoulders, promoting relaxation and reducing strain.");
    const [price, setPrice] = useState(5040);
    const [title, setTitle] = useState("Natural Leather Spanish Chair");

    function updateProduct(imgOne, imgTwo, imgThree, description, price, title) {
        setImgOne(imgOne);
        setImgTwo(imgTwo);
        setImgThree(imgThree);
        setDescription(description);
        setPrice(price);
        setTitle(title);
    }

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
                <Route path="/product" element={<Product title={title} price={price} description={description} imgThree={imgThree} imgTwo={imgTwo} imgOne={imgOne} prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
