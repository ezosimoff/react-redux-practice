import axios from 'axios';
import React from 'react';

const CatsFilter = () => {
	const [active, setActive] = React.useState(0);
	const [categories, setCategories] = React.useState(null);

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			setCategories(data.categories);
		});
	}, []);

	const handleClick = (index) => {
		setActive(index);
	};
	return (
		<div className='categories'>
			<ul>
				<li
					className={active === 0 ? 'active' : ''}
					onClick={() => handleClick(0)}
				>
					Все
				</li>
				{categories &&
					categories.map((el, index) => (
						<li
							className={index + 1 === active ? 'active' : ''}
							onClick={() => handleClick(index + 1)}
							key={el}
						>
							{el}
						</li>
					))}
			</ul>
		</div>
	);
};

export default CatsFilter;
