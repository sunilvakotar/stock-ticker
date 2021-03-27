const db = require("./database")();
const stockInfo = require('stock-info');

module.exports.getStockTicks = async () => {
    let symbols = await db.getStockSymbols();
    if(symbols.length > 0){
        try{
            return await stockInfo.getStocksInfo(symbols);
        }catch(error){
            console.error(error);
        }
    }
    return [];
};

module.exports.addSymbol = async symbol => {
    return await db.addStockSymbol(symbol);
}