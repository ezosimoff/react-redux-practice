import classNames from 'classnames';
import React from 'react';

const Button = ({ className, circle, black, outline, children }) => {
	return (
		<button
			className={classNames('button', className, {
				'button--circle': circle,
				'button--black': black,
				'button--outline': outline,
			})}
		>
			{children}
		</button>
	);
};

export default Button;
