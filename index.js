//require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;

//mongodb configs
var connectionUrl = 'mongodb://localhost:27017/myproject';
var sampleCollection = 'chapters';

//We need to insert these chapters into mongoDB
var chapters = [{
    title: 'Snow Crash 11',
    author: 'Neal Stephenson  1'
}, {
    title: 'Snow Crash 11',
    author: 'Neal Stephenson 11'
}];

MongoClient.connect(connectionUrl, function (err, db) {

    console.log("Connected correctly to server");

    // Get some collection
    var collection = db.collection(sampleCollection);

    collection.insertMany(chapters, function (error, result) {
        //here result will contain an array of records inserted
        if (!error) {
            console.log("Success :" + result.ops.length + " chapters inserted!");
        } else {
            console.log("Some error was encountered!");
        }
        console.log(result);
        db.close();
    });
});
