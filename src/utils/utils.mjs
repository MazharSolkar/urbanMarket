const PRODUCTS_URL = 'https://www.course-api.com/react-store-products';

const SINGLE_PRODUCTS_URL =
	'https://www.course-api.com/react-store-single-product?id=';

export const centToRs = (cent) => `₹ ${Math.ceil(parseInt(cent) / 100)}`;

export { PRODUCTS_URL, SINGLE_PRODUCTS_URL };
