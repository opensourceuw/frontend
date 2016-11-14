// var http = require('http');

function fab (a) {
	if (a == 1) return 1;
	else if (a == 2) return 1;
	else return fab(a - 1) + fab(a - 2);
}


console.log (fab (5));
// 1 1 2 3 5 8
