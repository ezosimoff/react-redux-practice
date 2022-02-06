import React from 'react';
import axios from 'axios';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { fetchAction } from './redux/actions/fetchAction';
import {useDispatch} from 'react-redux';
import './scss/app.scss';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			dispatch(fetchAction(data.items));
		});
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
