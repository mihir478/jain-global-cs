import React from 'react';
import { MenuItem, Box, Select, InputLabel } from '@mui/material';

const MetricDropdown = (props) => {

    const { availableMetrics, metric, setMetric } = props;
    
    if(!availableMetrics.length) return null;

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
