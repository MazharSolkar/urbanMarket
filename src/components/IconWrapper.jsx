import React from 'react';

const IconWrapper = ({ children, color }) => {
	return (
		<div
			className={`border-2 m-4 rounded-full shadow-lg overflow-hidden border-${color}-500 shadow-${color}-500/50`}>
			{children}
		</div>
	);
};

export default IconWrapper;
