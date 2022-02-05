import axios from 'axios';
import React from 'react';
import Controls from '../components/Controls';
import Header from '../components/Header';
import Itemslist from '../components/ItemsList';

const MainPage = () => {
	const [items, setItems] = React.useState(null);

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			setItems(data.items);
		});
	}, []);

	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Controls />
						<h2 className='content__title'>Все пиццы</h2>
						{items && <Itemslist items={items} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPage;
