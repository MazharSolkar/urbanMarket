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
const calculatePrice = (cartItems) => {
	return cartItems.reduce(
		(acc, cartItem) => acc + cartItem.price * cartItem.count,
		0
	);
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
			if (inBasket) {
				inBasket.count += 1;
			} else {
				state.cartItems.push(action.payload);

				cartSlice.caseReducers.calculatePrice(state);
			}

			localStorage.setItem('cart', JSON.stringify(state));
		},
		increase: (state, action) => {
			console.log(action.payload);
			const inBasket = state.cartItems.find(
				(item) => item.id === action.payload
			);

			if (inBasket) {
				inBasket.count += 1;
				localStorage.setItem('cart', JSON.stringify(state));
				cartSlice.caseReducers.calculatePrice(state);
			} else {
				return;
			}
		},
		decrease: (state, action) => {
			// console.log(action.payload);
			const inBasket = state.cartItems.find(
				(item) => item.id === action.payload
			);

			if (inBasket.count > 1) {
				inBasket.count -= 1;

				cartSlice.caseReducers.calculatePrice(state);
				localStorage.setItem('cart', JSON.stringify(state));
			} else {
				return;
			}
		},
		remove: (state, action) => {
			console.log(action.payload);
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload
			);

			state.cartItems.splice(itemIndex, 1);

			cartSlice.caseReducers.calculatePrice(state);
			localStorage.setItem('cart', JSON.stringify(state));
		},
		calculatePrice: (state) => {
			state.price = state.cartItems.reduce(
				(acc, cartItem) => acc + cartItem.price * cartItem.count,
				0
			);
		},
	},
});

export const { add, remove, clear, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
