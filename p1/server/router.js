var express = require ('express');
var router = express.Router();

router.get ('/test', (req, res) => {
	res.send ("Somethinadfsadfsg ... ");
});

router.get ('/with_para', (req, res) => {
	console.log (req.query);
	res.send (req.query);

});

module.exports = router;
