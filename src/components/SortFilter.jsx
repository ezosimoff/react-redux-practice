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

	const outsideClickListener = (e) => {
		if (!e.path.includes(sortRef.current)) setIsOpen(false);
	};

	React.useEffect(() => {
		document.body.addEventListener('click', (e) => outsideClickListener(e)); // only <body> node
		return () => {
			document.body.removeEventListener('click', outsideClickListener);
		};
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
								key={el}
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
