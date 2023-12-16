var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://172.17.0.2:27017/mydb";
MongoClient.connect(url, function(err, db){
          if(err) throw err;
          console.log("create database successfully!");
          db.close();
})