import axios from 'axios';

const API_KEY = 'OKEf3ZsoaLONvKREmqDPCR65w5HI5rns';

export const metricsRequest = (setAvailableMetrics) => {
    const URL = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=${API_KEY}`
    axios.get(URL)
        .then(function (response) {
            const options = Object.keys(response.data.historical[0]);
            const availableMetrics = ['cumulativeReturn', ...options.filter(d => d !== 'date' && d !== 'label')];
            setAvailableMetrics(availableMetrics);
        })
        .catch(function (error) {
            setAvailableMetrics([]);
        })
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

const handleResponseData = (metric, response, setChartData) => {
    const data = response.data.historical;
    let mappedData;
    let sum = 0;
    if (metric === 'cumulativeReturn') {
        mappedData = data.sort((a, b) => {
            // sort by date since data is returned in reverse chronological order from API
            return new Date(a.date) - new Date(b.date);
        }).map(d => {
            sum += d.changePercent;
            return {
                key: new Date(d.date),
                value: sum
            };
        });
    } else {
        mappedData = data.map(d => ({
            key: new Date(d.date),
            value: d[metric]
        })).sort((a, b) => {
            // sort by date since data is returned in reverse chronological order from API
            return a.key - b.key;
        });
    }
    setChartData(mappedData);
}

export default request;