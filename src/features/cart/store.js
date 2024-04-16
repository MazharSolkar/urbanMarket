import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
	reducer: {
		cartSlice: cartReducer,
	},
});

export default store;
