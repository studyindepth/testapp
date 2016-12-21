var worker = require('./dowork');

var total = worker.doWork(1, 10);

console.log(total);