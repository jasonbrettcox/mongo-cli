var mongo = require ('mongodb').MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
     var collection = db.collection('restaurants');
     var allChoice = prompt("Type 'all' and press enter to display all scooby snack vendors");
     if (allChoice == "all"){
        collection.find().toArray(function(err, doc){
         console.log(doc);
        });
     } else { 
         console.log("aww, you don't like scooby snacks?");
     }
     
    });