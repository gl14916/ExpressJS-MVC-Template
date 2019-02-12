db = require("../config/db.js");
describe("MongoDB", function() {
    it("is running MongoDB server with database \'kis\':", (next) => {
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb://' + 
            db.dbUsername + ':' + 
            db.dbPassword + '@' + 
            db.dbUrl +  ':' +
            db.dbPort + '/' + 
            db.dbName,
            { useNewUrlParser: true },
            function(err, db) {
            expect(err).toBe(null);
            next();
        });
    });
});
