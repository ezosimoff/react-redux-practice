import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { ReactComponent as IconPizza } from '../assets/img/icon-pizza.svg';
import { ReactComponent as IconCart } from '../assets/img/cart.svg';

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<Link to={'/'} className='header__logo'>
					<IconPizza width={40} height={40} />
					<div>
						<h1>React Pizza</h1>
						<p>Самая вкучная пицца в мире!</p>
					</div>
				</Link>
				<Link to={'/cart'} className='header__cart'>
					<Button className='button--cart'>
						<span>520 р</span>
						<div className='button__delimiter'></div>
						<IconCart width={20} height={20} />
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
