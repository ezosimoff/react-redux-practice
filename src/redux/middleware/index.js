import axois from 'axios';

export default () => (next) => (action) => {
	const { request, type, ...rest } = action;
	if (!request) return next(action);

	next({
		type: type + "_START",
		...rest,
	});

	axois.get(request)
		.then(({data}) => next({ type: type + "_SUCCESS", data, ...rest }))
		.catch((error) => next({ type: type + "_FAIL", error, ...rest }));
};
