module.exports = {
    initMongo: function () {
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/imgPloadr');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log("Mongodb connnected")
        });

    }
}