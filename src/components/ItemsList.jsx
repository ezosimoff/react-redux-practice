import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const Itemslist = () => {
	const store = useSelector(({ fetchReducer }) => ({
		items: fetchReducer.items,
	}));

	return (
		<div className='content__items'>
			{store.items.map((el) => (
				<Item key={el.name} {...el} />
			))}
		</div>
	);
};

export default Itemslist;
