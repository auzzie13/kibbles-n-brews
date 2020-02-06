const mongoose = require("mongoose");
const User = require("../models/user");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kibbles"
);

const userSeed = [
    {
        name: "Austin Williams",
        username: "auzzie",
        password: "austin",
        dogName: "Fitz",
        breed: "Boxer",
        profileImage: "https://i.pravatar.cc/300",
        dogImage: "https://images.dog.ceo/breeds/boxer/n02108089_2740.jpg",
        description: "Hello. Fitz and I love being outdoors and going on hikes.  Would love to meet up for a hike and explore new dog parks around town."
    },
    {
        name: "Paul Payton",
        username: "pPayton",
        password: "paul",
        dogName: "Peanut",
        breed: "Boxer",
        profileImage: "https://i.pravatar.cc/301",
        dogImage: "https://images.dog.ceo/breeds/boxer/n02108089_11032.jpg",
        description: "I'm a man on a mission, with a dog just trying to get a bone."
    },
    {
        userName: "Jason Hill",
        username: "jHill",
        password: "jason",
        dogName: "Clover",
        breed: "Pitbull",
        profileImage: "https://i.pravatar.cc/302",
        dogImage: "https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg",
        description: "I am a guy who enjoys taking long walks on the beach with my favorite girl, Clover. We are a perfect match!"
    },
    {        
        userName: "Zack White",
        username: "zWhite",
        password: "Zack",
        dogName: "Cubie",
        breed: "Chihuahua Terrier",
        profileImage: "https://i.pravatar.cc/303",
        dogImage: "https://images.dog.ceo/breeds/chihuahua/n02085620_3681.jpg",
        description: "This is me and my dog.  We want to hang out with other people and other dogs similar to us."
    }

]

User
  .remove({})
  .then(() => User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });