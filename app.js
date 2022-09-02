const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//connection url
const url = "mongodb://localhost:27017";

//database Name
const dbName = "fruitsDB";

//create a new Mongo MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

//use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null,err);
  console.log("connected successfully to the server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {

  //get the document collection
  const collection = db.collection("Fruits");

  //insert some insertDocuments
  collection.insertManny([
    {
      name: "Apple",
      score: 8,
      review: "Great Fruit"
    },
    {
      name: "Orange",
      score: 7,
      review: "Kinda Sour"
    },
    {
      name:"Banana",
      score: 9,
      review: "Good for zinc"
    }
  ],fucntion(err, result)) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    };
  
};
