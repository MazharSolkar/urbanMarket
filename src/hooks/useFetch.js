import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setdata] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetcher = async () => {
		try {
			const res = await fetch(url);
			const resData = await res.json();
			setdata(resData);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		fetcher();
	}, []);
	return { data: data, loading: loading };
};

export default useFetch;
