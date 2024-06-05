import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/ProductsSlice.js'
import ButtonsComponent from './components/ButtonsComponent.jsx';
import './App.css';
import ProductsComponent from "./components/ProductsComponent.jsx";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="App">
            <div className="container">
                <ProductsComponent/>
                <ButtonsComponent />
            </div>
        </div>
    );
};

export default App;
