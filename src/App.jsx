import React from 'react';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { fetchItemsAction } from './redux/actions/fetchAction';
import { fetchCatsAction } from './redux/actions/sortActions';
import { useDispatch } from 'react-redux';
import './scss/app.scss';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchItemsAction());
		dispatch(fetchCatsAction());
	}, []);

	return (
		<Routes>
			<Route path={'/'} element={<MainPage />} />
			<Route path={'/cart'} element={<CartPage />} />
			<Route path={'*'} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
