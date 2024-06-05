import React from 'react';
import { useDispatch } from 'react-redux';
import { nextProduct, prevProduct } from '../store/ProductsSlice.js'

const ButtonsComponent = () => {
    const dispatch = useDispatch();

    return (
        <div className="navigation-buttons">
            <button onClick={() => dispatch(prevProduct())}>Назад</button>
            <button onClick={() => dispatch(nextProduct())}>Вперед</button>
        </div>
    );
};

export default ButtonsComponent;
