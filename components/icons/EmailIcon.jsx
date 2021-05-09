import React from 'react';
import homeStyles from '../../styles/Home.module.scss';

const EmailIcon = () => {
	return (
		<svg
			className={homeStyles['contact-svg']}
			id='mail_outline-24px'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 42.576 42.576'
		>
			<path
				id='Path_713'
				data-name='Path 713'
				d='M0,0H42.576V42.576H0Z'
				fill='none'
			/>
			<path
				id='Path_714'
				data-name='Path 714'
				d='M33.932,4H5.548a3.543,3.543,0,0,0-3.53,3.548L2,28.836a3.558,3.558,0,0,0,3.548,3.548H33.932a3.558,3.558,0,0,0,3.548-3.548V7.548A3.558,3.558,0,0,0,33.932,4Zm0,24.836H5.548V11.1l14.192,8.87L33.932,11.1ZM19.74,16.418,5.548,7.548H33.932Z'
				transform='translate(1.548 3.096)'
			/>
		</svg>
	);
};

export default EmailIcon;
