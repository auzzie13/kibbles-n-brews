const router = require("express").Router();
const User = require("../../models/user");
const UserSession = require("../../models/userSession");
const mongoose = require("mongoose");
// const usersController = require("../../controllers/usersController");

//Sign Up

router.route("/register").post((req, res) => {
  const { body } = req;
  let { name, username, password, description, dogName, breed } = body;

  console.log("BODY: ", body);

  if (!name) {
    res.send({
      success: false,
      message: "Error:  Name cannot be blank."
    });
  }
  if (!username) {
    res.send({
      success: false,
      message: "Error:  Username cannot be blank."
    });
  }
  if (!password) {
    res.send({
      success: false,
      message: "Error:  Password cannot be blank."
    });
  }
  if (!description) {
    res.send({
      success: false,
      message: "Error:  Description cannot be blank."
    });
  }

  //verify Username doesn't exist
  User.find(
    {
      username: username
    },
    (err, previousUsers) => {
      if (err) {
        res.send({
          success: false,
          message: "Error: Server error"
        });
      } else if (previousUsers.length > 0) {
        // alert("Username already exists, please try again.");
        res.send({
          success: false,
          message: "Error:  Username already exists."
        });
      }

      //Save new User
      const newUser = new User();

      newUser.username = username;
      newUser.name = name;
      newUser.password = password;
      newUser.breed = breed;
      newUser.description = description;
      newUser.dogName = dogName;
      newUser.save((err, user) => {
        if (err) {
          res.send({
            success: false,
            message: "Error: Server error"
          });
        }
        res.send({
          success: true,
          message: "Signed Up"
        });
      });
    }
  );
});

//Signin

router.route("/signin").post((req, res) => {
  const { body } = req;
  let { username, password } = body;

  if (!username) {
    res.send({
      success: false,
      message: "Error:  Username cannot be blank."
    });
  }
  if (!password) {
    res.send({
      success: false,
      message: "Error:  Password cannot be blank."
    });
  }
  User.find(
    {
      username: username
    },
    (err, users) => {
      if (err) {
        res.send({
          success: false,
          message: "Error: server error"
        });
      }
      if (users.length != 1) {
        res.send({
          success: false,
          message: "Error: Invalid"
        });
      }

      const user = users[0];
      if (!user.password) {
        res.send({
          success: false,
          message: "Error: Invalid password"
        });
      }
      console.log("pasword check: ", password, user.password);
      if (password === user.password) {
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
          console.log(doc);
          // if (err) {
          //   return res.send({
          //     success: false,
          //     message: "Error: server error."
          //   });
          // }
          // return res.send({
          //   success: true,
          //   message: "Valid sign in",
          //   token: doc._id
          // });
        });
        res.send({
          success: true,
          message: "Signed in"
        });
      }
    }
  );
});

router.route("/member").get((req, res) => {
  console.log("member route hit");
  UserSession.find({}, (err, data) => {
    if (err) {
      console.log(err);
      return false;
    }
    User.findOne({ _id: data[0].userId }, (err, doc) => {
      if (err) {
        console.log(err);
        return false;
      }
      res.send(doc);
    });
  });
});

// router.route("/verify").get((req, res) => {
//   //get the token
//   const { query } = req;
//   const { token } = query;

//   //verify the token is one of a kind and it's not deleted.

//   UserSession.find(
//     {
//       _id: token,
//       isDeleted: false
//     },
//     (err, sessions) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: "Error: Server error"
//         });
//       }
//       if (sessions.length != 1) {
//         return res.send({
//           success: false,
//           message: "Error: Invalid"
//         });
//       } else {
//         return res.send({
//           sucess: true,
//           message: "Good"
//         });
//       }
//     }
//   );
// });

router.route("/logout").delete((req, res) => {
  mongoose.connection.db.dropCollection("usersessions", err => {
    if (err) {
      console.log(err);
      res.send({
        success: false,
        message: "Logged Out"
      });
      return;
    }
    res.send({
      success: true,
      message: "Logged Out"
    });
  });
});

module.exports = router;
