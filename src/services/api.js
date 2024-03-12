import axios from 'axios';
import { Price, Return } from '../constants';

const API_KEY = 'oZtblJOFjgZqKnGBCvOLYHXAlCq1R4ka';

const metricToPropMap = {
    [Price]: 'close',
    [Return]: 'changePercent'
}

export const metricToLabel = {
    [Price]: 'Closing Prices ($)',
    [Return]: 'Daily Return (%)'
}

const handleResponseData = (metric, response, setChartData) => {
    const data = response.data.historical;
    const mappedData = data.map(d => ({
        key: new Date(d.date),
        [metricToLabel[metric]]: d[metricToPropMap[metric]]
    })).sort((a, b) => {
        // sort by date since data is returned in reverse chronological order from API
        return a.key - b.key;
    });
    setChartData(mappedData);
}

const request = (symbol, metric, setChartData) => {
    if (!symbol || !metric) {
        return [];
    }
    const URL = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${API_KEY}`
    axios.get(URL)
        .then(function (response) {
            return handleResponseData(metric, response, setChartData);
        })
        .catch(function (error) {
            console.error(error);
            return [];
        })
}

export default request;