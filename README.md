# Front End Engineering Case Study
## Approach and Methodology
    1. Used create-react-app to bootstrap solution. I did not want to waste time on project setup.
    2. Used material UI to get good looking form controls. This is the most popular react UI toolkit in the marketplace.
    3. Used react to build the app. I chose this library since I am most comfortable with it and it is the most well known and modern UI library out there.
    4. Used axios to make data requests. The choice here is a personal one since there are many flavors out there and the choice doesn't have a big impact on the app.
    5. Used recharts to build a line chart. This was also a personal choice due to prior experience and was the easiest one to get started with. The transition animation is attractive in my opinion.
## Challenges Faced and Solutions
    1. The API provider URL has changed: https://site.financialmodelingprep.com/developer/docs. A quick web search resolved this.
    2. Marker dots in the line chart library were a bit bubbly and distracting. I removed them.
    3. No other major challenges were faced. Typical coding and debugging.
## Assumptions Made
    1. I took the top 7 US companies by market cap since the API supports over 25000 tickers, this would have made the dropdown unwieldy.
    2. For prices I assumed the user would be most interested in the closing prices over time.
    3. For return I used changePercent which I assume is the daily percentage change between closing prices.
    4. I used the default date range of 5 years worth of data. Future enhancements should include a date picker to change the time-frame a user is interested in.
## Time Spent
The following is the approximate time spent on the assessment.
| Task            | Time Spent |
|-----------------|------------|
| Ticker Dropdown | 20 min     |
| Metric Dropdown | 10 min     |
| TS Chart        | 1 Hr       |
| Write-up        | 1 Hr       |
| Debugging       | 30 min     |
## Self Assessment
I have graded my own work as below.
| Criteria         | Score | Comment                                                                                                                                                       |
|------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Code Readability | 9     | Tried to use good variable names and function names.                                                                                                          |
| User Experience  | 9     | Simple and easy to use.                                                                                                                                       |
| Unit Testing     | 0     | Did not write any.                                                                                                                                            |
| Time Spent       | 7     | Spent 3 hours on this which I think is typical but can always be better. Extra time was needed to setup my development environment and has not been included. |
