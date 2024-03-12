import React from 'react';
import { MenuItem, Box, Select, InputLabel } from '@mui/material';

const availableTickers = [
	{ symbol: 'MSFT', name: 'Microsoft' },
	{ symbol: 'AAPL', name: 'Apple' },
	{ symbol: 'NVDA', name: 'Nvidia' },
	{ symbol: 'AMZN', name: 'Amazon' },
	{ symbol: 'GOOG', name: 'Alphabet (Google)' },
	{ symbol: 'META', name: 'Meta Platforms (Facebook)' },
	{ symbol: 'BRK.B', name: 'Berkshire Hathaway' }
];

const TickerDropdown = (props) => {

	const { ticker, setTicker } = props;

	const handleChange = (event) => {
		setTicker(event.target.value);
	};

	return (
		<Box>
			<InputLabel id="ticker-label">Select Ticker</InputLabel>
			<Select
				labelId="ticker-label"
				id="ticker-select"
				value={ticker}
				onChange={handleChange}
			>
				{availableTickers.map((item, index) => (
					<MenuItem key={index} value={item.symbol}>
						{item.name} ({item.symbol})
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};

export default TickerDropdown;
