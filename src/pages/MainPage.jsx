import React from 'react';
import Controls from '../components/Controls';
import Header from '../components/Header';
import Itemslist from '../components/ItemsList';

const MainPage = () => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Controls />
						<h2 className='content__title'>Все пиццы</h2>
						<Itemslist />
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPage;
