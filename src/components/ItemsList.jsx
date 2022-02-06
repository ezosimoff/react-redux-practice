import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const Itemslist = () => {
	const items = useSelector(({ fetchReducer }) => fetchReducer.items);

	return (
		<div className='content__items'>
			{items && items.map((el) => (
				<Item key={el.name} {...el} />
			))}
		</div>
	);
};

export default Itemslist;
