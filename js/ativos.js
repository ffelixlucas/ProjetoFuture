function loadTradingViewWidget() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.onload = () => {
        // Executa o código do TradingView após o script carregar
        new TradingView.widget({
            "width": "100%", // Ajuste a largura conforme necessidade
            "height": "670", // Ajuste a altura conforme necessidade
            "symbols": [
                {
                  "description": "",
                  "proName": "BMFBOVESPA:WIN1!"
                },
                {
                  "description": "",
                  "proName": "BMFBOVESPA:DOL1!"
                },
                {
                  "description": "",
                  "proName": "FX:EURUSD"
                },
                {
                  "description": "",
                  "proName": "FX:GBPUSD"
                },
                {
                  "description": "",
                  "proName": "OANDA:GBPJPY"
                },
                {
                  "description": "",
                  "proName": "BINANCE:BTCUSDT"
                },
                {
                  "description": "",
                  "proName": "BITSTAMP:ETHUSD"
                },
                {
                  "description": "",
                  "proName": "BITSTAMP:BTCUSD"
                },
                {
                  "description": "",
                  "proName": "BMFBOVESPA:IBOV"
                },
                {
                  "description": "",
                  "proName": "TVC:DXY"
                }
              ],
            "showSymbolLogo": true,
            "isTransparent": true,
            "displayMode": "adaptive",
            "colorTheme": "dark",
            "locale": "br"
        });
    };
    document.body.appendChild(script);
}

// Invoque a função para carregar o widget
loadTradingViewWidget();
