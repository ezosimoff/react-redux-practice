import React from 'react';
import Item from './Item';

const Itemslist = ({ items }) => {
	return (
		<div className='content__items'>
			{items.map((el) => (
				<Item key={el.name} {...el} />
			))}
		</div>
	);
};

export default Itemslist;
