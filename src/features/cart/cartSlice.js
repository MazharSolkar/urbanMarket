import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	price: 0,
	totalAmount: 0,
	discount: 0.1,
	deliveryCharges: 0.05,
};

const getCartFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('cart')) || initialState;
};

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: getCartFromLocalStorage(),
	reducers: {
		add: (state, action) => {
			console.log(action.payload);
			inBasket = state.cartItems.find((item) => item.id === action.payload.id);
			inBasket ? (inBasket.count += 1) : state.cartItems.push(action.payload);

			localStorage.setItem('cart', JSON.stringify(state));
		},
		remove: (state, action) => {},
		clear: (state, action) => {},
	},
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
