import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  blogs: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      author: {
        type: String,
      },
      image:{
        type: String,
      }
    },
  ],
  likedblogs: [
    {
      title: {
        type: String,
      },
      author: {
        type: String,
      },
      image:{
        type: String,
      }
    },
  ],
});

const user = mongoose.model("user", userSchema);

export default user;
