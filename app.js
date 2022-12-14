
//require mongoose
const mongoose = require("mongoose");

//connect to local server
mongoose.connect("mongodb://localhost:27017/fruitsDB")

//insert objects
const fruitSchema = new mongoose.Schema({
  name: String,
  rating:{
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

 const Fruit = mongoose.model("Fruit", fruitSchema);

const coconut = new Fruit ({
  name: "coconut",
  rating:4,
  review:"Sour"
});

// coconut.save();

// const kiwi = new Fruit ({
//   name:"Kiwi",
//   rating: 6,
//   review:"Too Costly"
// });
//
// const banansa = new Fruit( {
//   name: "banana",
//   rating: 9,
//   review: "Rich in zinc"
// });
//
// const pomegranate = new Fruit({
//   name: "pomegranate",
//   rating: 7,
//   review: "Swettens the cum"
// });

// Fruit.insertMany([kiwi,banana,pomegranate], function(err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitDB");
//   };
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Member = mongoose.model("Member", personSchema);

const member = new Member({
  name: "Chiku",
  age: 24,
  favouriteFruit: coconut
});

member.save();


// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//
//     for (var i = 0; i < fruits.length; i++) {
//       console.log(fruits[i].name)
//     };
//   };
// });



// Fruit.updateOne({_id: "631227b189a502696b3d59ad"}, {name: "Peach"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("successfully updated the document");
//   };
// });
//
// Fruit.deleteOne({name: "Peach"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   };
// });


// Member.deleteMany({name: "Angela"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the entries");
//   };
// });
