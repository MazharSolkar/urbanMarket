const PRODUCTS_URL = 'https://www.course-api.com/react-store-products';

const SINGLE_PRODUCTS_URL =
	'https://www.course-api.com/react-store-single-product?id=';

const GITHUB_USER_URL = '  https://api.github.com/users/mazharsolkar';

const centToRs = (cent) => `₹ ${Math.ceil(parseInt(cent) / 10)}`;

export { PRODUCTS_URL, SINGLE_PRODUCTS_URL, GITHUB_USER_URL, centToRs };
