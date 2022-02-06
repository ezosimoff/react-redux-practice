export const setSortBy = (payload) => ({
	type: 'SET_SORT_BY',
	payload,
});

export const setSortByCats = (payload) => ({
	type: 'SET_SORT_BY_CATS',
	payload,
});

export const fetchCatsAction = () => ({
	type: 'GET_CATEGORIES',
	request: 'http://localhost:3001/categories',
});

