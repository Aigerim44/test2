import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        currentProductIndex: 0,
        status: 'idle',
        error: null,
    },
    reducers: {
        nextProduct(state) {
            if (state.currentProductIndex < state.products.length - 1) {
                state.currentProductIndex++;
            }
        },
        prevProduct(state) {
            if (state.currentProductIndex > 0) {
                state.currentProductIndex--;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { nextProduct, prevProduct } = productsSlice.actions;

export default productsSlice.reducer;
