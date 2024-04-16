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
			const inBasket = state.cartItems.find(
				(item) => item.id === action.payload.id
			);
			inBasket ? (inBasket.count += 1) : state.cartItems.push(action.payload);

			localStorage.setItem('cart', JSON.stringify(state));
		},
		increase: (state, action) => {
			console.log(action.payload);
			const inBasket = state.cartItems.find(
				(item) => item.id === action.payload
			);

			inBasket && (inBasket.count += 1);
			localStorage.setItem('cart', JSON.stringify(state));
		},
		decrease: (state, action) => {
			// console.log(action.payload);
			const inBasket = state.cartItems.find(
				(item) => item.id === action.payload
			);

			inBasket.count > 1 && (inBasket.count -= 1);
			localStorage.setItem('cart', JSON.stringify(state));
		},
		remove: (state, action) => {
			console.log(action.payload);
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload
			);

			state.cartItems.splice(itemIndex, 1);
			localStorage.setItem('cart', JSON.stringify(state));
		},
		clear: (state, action) => {},
	},
});

export const { add, remove, clear, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
