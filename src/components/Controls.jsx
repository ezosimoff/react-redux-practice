import React from 'react';
import Catsfilter from './CatsFilter';
import Sortfilter from './SortFilter';

const Controls = () => {
	return (
		<>
			<div className='content__top'>
				<Catsfilter />
				<Sortfilter items={['популярности', 'цене', 'алфавиту']} />
			</div>
		</>
	);
};

export default Controls;
