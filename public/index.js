async function main() {
    let response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=9822bc9d38104c46b9245fb77447a12f')
    let responseText = await response.json();

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    
    // const { GME, MSFT, DIS, BNTX } = result;

    // const stocks = [GME, MSFT, DIS, BNTX];
    
    console.log(responseText)
}

main()