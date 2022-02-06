import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortByCats } from '../redux/actions/sortActions';

const CatsFilter = () => {
	const dispactch = useDispatch();

	const data = useSelector(({ catsReducer }) => ({
		active: catsReducer.active,
		categories: catsReducer.itemsCats
	}));

	const handleClick = (index) => {
		dispactch(setSortByCats(index));
	};

	return (
		<div className='categories'>
			<ul>
				{data.categories &&
					data.categories.map((el, index) => (
						<li
							className={index === data.active ? 'active' : ''}
							onClick={() => handleClick(index)}
							key={el.name}
						>
							{el.name}
						</li>
					))}
			</ul>
		</div>
	);
};

export default CatsFilter;
