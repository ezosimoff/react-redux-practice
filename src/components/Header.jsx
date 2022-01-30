import React from 'react';
import Button from './Button';
import { ReactComponent as IconPizza } from '../assets/img/icon-pizza.svg';
import { ReactComponent as IconCart } from '../assets/img/cart.svg';

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='header__logo'>
					<IconPizza width={40} height={40} />
					<div>
						<h1>React Pizza</h1>
						<p>Самая вкучная пицца в мире!</p>
					</div>
				</div>
				<div className='header__cart'>
					<Button className='button--cart'>
						<span>520 р</span>
						<div className='button__delimiter'></div>
						<IconCart width={20} height={20} />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
