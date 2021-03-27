module.exports = (persistence = []) => {
    const getStockSymbols = async () =>
        await new Promise(resolve => resolve(persistence));

    const addStockSymbol = async (symbols) =>
        new Promise(resolve => {
            console.log(symbols);
            symbols = (typeof symbols === 'string') ? Array(symbols) : symbols
            symbols.forEach(symbol => {
                if (!persistence.includes(symbol)) {
                    persistence.push(symbol);
                }
            });
            console.log("DB =", persistence);
            resolve(true);
        });

    return {
        getStockSymbols,
        addStockSymbol
    };
};