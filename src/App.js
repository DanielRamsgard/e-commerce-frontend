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
    const [total, setTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [prevPage, setPrevPage] = useState("/");
    const [imgOne, setImgOne] = useState("/static/media/spanish.jpeg");
    const [imgTwo, setImgTwo] = useState("/static/media/spanish1.jpeg");
    const [imgThree, setImgThree] = useState("/static/media/spanish2.jpeg");
    const [description, setDescription] = useState("The Natural Leather Spanish Chair combines timeless craftsmanship with modern comfort. Featuring high-quality leather and a sturdy wooden frame, it exudes elegance and durability. Ideal for living rooms or offices, it adds a touch of classic Spanish charm to any interior.");
    const [price, setPrice] = useState(5040);
    const [title, setTitle] = useState("Natural Leather Spanish Chair");
    const [texture, setTexture] = useState("Leather");
    const [weight, setWeight] = useState("25kg");
    const [size, setSize] = useState("80cm x 50cm");
    const [cartTwo, setCartTwo] = useState(false);
    const [cartContent, setCartContent] = useState([]);

    function updateCartContent(img, title, price, quantity) {
        setCartContent(cartContent.push({img, title, price, quantity}));
        console.log(cartContent);
    }

    function updateTotal(sum) {
        setTotal(total + sum);
    }

    function updateCartTwo(bool) {
        setCartTwo(bool);
    }

    function updateProduct(imgOne, imgTwo, imgThree, description, price, title, texture, weight, size) {
        setImgOne(imgOne);
        setImgTwo(imgTwo);
        setImgThree(imgThree);
        setDescription(description);
        setPrice(price);
        setTitle(title);
        setTexture(texture);
        setWeight(weight);
        setSize(size);
    }

    function updatePrevPage(newPage) {
        setPrevPage(newPage);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} updateProduct={updateProduct} prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/navigation" element={<Navigation cartContent={cartContent} prevPage={prevPage}/>}></Route>
                <Route path="/categories/all" element={<CategoriesAll cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} prevPage={prevPage} updateProduct={updateProduct} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/furniture" element={<Furniture cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} prevPage={prevPage} updateProduct={updateProduct} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/electronics" element={<Electronics cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} prevPage={prevPage} updateProduct={updateProduct} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/lamps" element={<Lamps cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} prevPage={prevPage} updateProduct={updateProduct} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/kitchen" element={<Kitchen cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} prevPage={prevPage} updateProduct={updateProduct} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/chairs" element={<Chairs cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} prevPage={prevPage} updateProduct={updateProduct} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/categories/skincare" element={<Skincare cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} prevPage={prevPage} updateProduct={updateProduct} updatePrevPage={updatePrevPage}/>}></Route>
                <Route path="/product" element={<Product updateCartContent={updateCartContent} cartContent={cartContent} updateCartTwo={updateCartTwo} updateTotal={updateTotal} cartTwo={cartTwo} total={total} cartCount={cartCount} setCartCount={setCartCount} updateProduct={updateProduct} size={size} weight={weight} texture={texture} title={title} price={price} description={description} imgThree={imgThree} imgTwo={imgTwo} imgOne={imgOne} prevPage={prevPage} updatePrevPage={updatePrevPage}/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
