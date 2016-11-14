var express = require ('express');
var router = express.Router();

router.get ('/with_para', (req, res) => {
	console.log (req.url);
	res.send (req.query);
});

router.post ('/with_para', (req, res) => {
	console.log (req.url);
	res.send (req.body);
});

module.exports = router;
