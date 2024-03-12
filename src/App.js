import './App.css';

import { FormControl } from '@mui/base';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import MetricDropdown from './components/MetricDropdown';
import TickerDropdown from './components/TickerDropdown';
import LineChartWithDates from './components/LineChartWithDates';
import request from './services/api';

function App() {
    const [ticker, setTicker] = React.useState('');
    const [metric, setMetric] = React.useState('');
    const [chartData, setChartData] = React.useState([]);

    useEffect(() => {
        request(ticker, metric, setChartData);
    }, [ticker, metric, setChartData]);

    return (
        <div className="App">
            <Box component="section" sx={{ p: 4, border: '1px solid grey' }}>
                <FormControl>
                    <TickerDropdown ticker={ticker} setTicker={setTicker} />
                    <MetricDropdown metric={metric} setMetric={setMetric} />
                </FormControl>
                <LineChartWithDates data={chartData} metric={metric} />
            </Box>
        </div>
    );
}

export default App;
