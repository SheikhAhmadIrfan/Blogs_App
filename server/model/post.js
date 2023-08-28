import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  image:{
    type: String,
  },
  comments: [
    {
      text: {
        type: String,
      },
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now, 
  },
});

const post = mongoose.model("post", postSchema);
export default post;
