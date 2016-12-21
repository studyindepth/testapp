module.exports = {
    initMongo: function () {
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/imgPloadr');
        mongoose.connection.on('open', function () {
            console.log('Mongoose connected.');
        });
    }
}