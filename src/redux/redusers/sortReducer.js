const initState = {
	sortBy: 'популярности',
	sortByCats: 0,
};

export default function fetchReducer(state = initState, action) {
	const { payload, type } = action;
	switch (type) {
		case 'SET_SORT_BY':
			return {
				...state,
				isLoading: true,
			};
		case 'SET_SORT_BY_CATS':
			return {
				...state,
				items: payload,
				isLoading: false,
			};
		default:
			return state;
	}
}
