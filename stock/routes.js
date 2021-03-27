var express = require('express');
var router = express.Router();
const jsonParser = require("body-parser").json();
const schema = require('../middleware/schema');
const validate = require("../middleware/request-validator");
const { getStockTicks, addSymbol } = require("./controller");

router.use(jsonParser);

router.get("/ticker", async (req, res) => {
    let ticks = await getStockTicks();
    return res.status(200).json(ticks);
});

router.post("/addSymbol", validate(schema.addSymbol), async (req, res) => {
    const symbol = req.body.symbol;
    return res.status(200).json({ "status": await addSymbol(symbol) });
});

module.exports = router;