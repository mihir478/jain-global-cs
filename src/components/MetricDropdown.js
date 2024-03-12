import React from 'react';
import { MenuItem, Box, Select, InputLabel } from '@mui/material';

import { Price, Return } from '../constants';

export const availableMetrics = [
    Price,
    Return
];

const MetricDropdown = (props) => {

    const { metric, setMetric } = props;

    const handleChange = (event) => {
        setMetric(event.target.value);
    };

    return (
        <Box sx={{ mt: 2 }}>
            <InputLabel id="metric-label">Select Metric</InputLabel>
            <Select
                labelId="metric-label"
                id="metric-select"
                value={metric}
                onChange={handleChange}
            >
                {availableMetrics.map((item, index) => (
                    <MenuItem key={index} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default MetricDropdown;
