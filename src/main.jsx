import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './store/ProductsSlice.js'
import App from './App';
import './index.css';

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
