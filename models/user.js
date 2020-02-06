//to create a user log in profile
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

const User = new Schema({
  name: { type: String, required: true, default: "" },
  dogName: { type: String, required: true, default: "" },
  username: { type: String, required: true, default: "" },
  password: { type: String, required: true, default: "" },
  breed: { type: String, required: true, default: "" },
  dogSize: { type: String, required: false, default: "" },
  dogEnergy: { type: String, required: false, default: "" },
  profileImage: { type: String, required: false, default: "" },
  dogImage: { type: String, required: false, default: "" },
  description: { type: String, required: true, default: "" },
  isDeleted: { type: Boolean, default: false }
});

User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", User);
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   User.addHook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     console.log(user)
//   });

//     User.associate = function(models) {
//     User.hasMany(models.pet, {
//       onDelete: "cascade"
//     });
//   };

//   return User;
// };
