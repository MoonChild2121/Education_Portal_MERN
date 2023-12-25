const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  LessonsMaths: {
    type: Array,
    required: true,
  },
  LessonsEnglish: {
    type: Array,
    required: true,
  },
  LessonsScience: {
    type: Array,
    required: true,
  }
  
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
