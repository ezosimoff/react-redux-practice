import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<MainPage />} />
			<Route path={'/cart'} element={<CartPage />} />
			<Route path={'*'} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
