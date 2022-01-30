import React from 'react';
import { ReactComponent as ArrowDown } from '../assets/img/arrow-down.svg';

const Sortfilter = ({ items }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeItem, setActiveItem] = React.useState(0);
	const sortRef = React.useRef();
	const activeName = items[activeItem];

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	const handleSelect = (index) => {
		setActiveItem(index);
		setIsOpen(false);
	};

	React.useEffect(() => {
		document.body.addEventListener('click', (e) => {
			if (!e.path.includes(sortRef.current)) setIsOpen(false);
		}); // only <body> node
	}, []);

	return (
		<div className='sort' ref={sortRef}>
			<div className='sort__label' onClick={handleOpen}>
				<ArrowDown />
				<b>Сортировка по :</b>
				<span>{activeName}</span>
			</div>
			{isOpen && (
				<div className='sort__popup'>
					<ul>
						{items.map((el, i) => (
							<li
								key={Math.random()}
								className={i === activeItem ? 'active' : ''}
								onClick={() => handleSelect(i)}
							>
								{el}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sortfilter;
