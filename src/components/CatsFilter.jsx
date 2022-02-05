import React from 'react';

const cats = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
];

const Catsfilter = () => {
	const [active, setActive] = React.useState(0);

	const handleClick = (index) => {
		setActive(index);
	};
	return (
		<div className='categories'>
			<ul>
				{cats &&
					cats.map((el, index) => (
						<li
							className={index === active ? 'active' : ''}
							onClick={() => handleClick(index)}
							key={Math.random()}
						>
							{el}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Catsfilter;
