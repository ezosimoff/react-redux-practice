const initState = {
	itemsCats: [],
	sortBy: 'популярности',
	active: 0,
	isLoading: true,
	error: '',
};

export default function catsReducer(state = initState, action) {
	const { payload, type, data, error } = action;
	switch (type) {
		case 'GET_CATEGORIES_START':
			return {
				...state,
				isLoading: false,
			};
		case 'GET_CATEGORIES_SUCCESS':
			return {
				...state,
				itemsCats: data,
				isLoading: true,
			};
		case 'GET_CATEGORIES_FAIL':
			return {
				...state,
				error: error.message,
				isLoading: true,
			};
		case 'SET_SORT_BY':
			return {
				...state,
				isLoading: true,
			};
		case 'SET_SORT_BY_CATS':
			return {
				...state,
				active: payload,
			};
		default:
			return state;
	}
}
