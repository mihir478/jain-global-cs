import './App.css';

import { FormControl } from '@mui/base';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import MetricDropdown from './components/MetricDropdown';
import TickerDropdown from './components/TickerDropdown';
import LineChartWithDates from './components/LineChartWithDates';
import request, { metricsRequest } from './services/api';

function App() {
    const [availableMetrics, setAvailableMetrics] = React.useState([]);
    const [ticker, setTicker] = React.useState('');
    const [metric, setMetric] = React.useState('');
    const [chartData, setChartData] = React.useState([]);

    useEffect(() => {
        metricsRequest(setAvailableMetrics);
    }, [])

    useEffect(() => {
        request(ticker, metric, setChartData);
    }, [availableMetrics, ticker, metric, setChartData]);

    return (
        <div className="App">
            <Box component="section" sx={{ p: 4, border: '1px solid grey' }}>
                <FormControl>
                    <TickerDropdown ticker={ticker} setTicker={setTicker} />
                    <MetricDropdown availableMetrics={availableMetrics} metric={metric} setMetric={setMetric} />
                </FormControl>
                <LineChartWithDates data={chartData} metric={metric} />
            </Box>
        </div>
    );
}

export default App;
