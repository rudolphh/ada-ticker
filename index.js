const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'B9jvCExtJU64rQanMCCLA4NwSd3ShTrWdwheoa7HhhfmpSfoNkTEdwfq37H4ZY7u',
  APISECRET: '3acrP1GUqM7hOU6pYCYccYTFEr8FaOuPhA3G5n2KnvtxO7mqQqfyRLvekQRR4lVQ'
});

binance.futuresMiniTickerStream( 'ADAUSDT', (adaTicker) => {
    console.log(adaTicker.close);
});