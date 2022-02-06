const initState = {
	items: [],
	isLoading: false,
	error: '',
};

export default function fetchReducer(state = initState, action) {
	const { payload, type, data, error } = action;
	switch (type) {
		case 'GET_ITEMS_START':
			return {
				...state,
				isLoading: true,
			};
		case 'GET_ITEMS_SUCCESS':
			return {
				...state,
				items: data,
				isLoading: false,
			};
		case 'GET_ITEMS_FAIL':
			return {
				...state,
				isLoading: false,
				error: error.message,
			};
		default:
			return state;
	}
}
