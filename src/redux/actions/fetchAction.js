export const fetchItemsAction = () => ({
	type: 'GET_ITEMS',
	request: 'http://localhost:3001/items',
});