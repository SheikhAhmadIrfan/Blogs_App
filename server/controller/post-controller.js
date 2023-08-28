import Post from "../model/post.js";
import User from "../model/user.js";

export const createPost = async (request, response) => {
  try {
    const imagename=request.file.filename
    const data1 = {
      title: request.body.title,
      description: request.body.description,
      username: request.body.username,
      image:imagename
    };
    console.log(data1);
    const post = new Post(data1);
    const user = await User.findOne({ username: request.body.username });
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    user.blogs.push(data1);
    await post.save();
    await user.save();
    return response.status(200).json("post saved successfully");
  } catch (error) {
    return response.status(500).json(error);
  }
};
export const updatePost = async (request, response) => {
  try {
    const upPost = await Post.findByIdAndUpdate(
      request.params.id,
      { $set: request.body },
      { new: true }
    );
    response.status(200).json(upPost);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ msg: "error while updating post" });
  }
};
export const deletePost = async (request, response) => {
  try {
    await Post.findByIdAndDelete(request.params.id);
    response.status(200).json("post has been deleted");
  } catch (err) {
    console.error(error);
    return response.status(500).json({ msg: "error while deleting post" });
  }
};
export const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (err) {
    console.error(err);
    return response
      .status(500)
      .json({ msg: "error while reading a single post" });
  }
};
export const getPosts = async (request, response) => {
  try {
    const posts = await Post.find();
    response.status(200).json(posts);
  } catch (err) {
    console.error(error);
    return response.status(500).json({ msg: "error while reading a all post" });
  }
};
export const postComment = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    const data = {
      text: request.body.text,
    };
    post.comments.push(data);
    await post.save();
    return response.status(200).json("comment saved successfully");
  } catch (err) {
    // Change error to err
    console.error(err); // Change error to err
    return response.status(500).json({ msg: "error while reading all posts" });
  }
};
export const likedpost = async (request, response) => {
  try {
    const data = {
      title: request.body.title,
      author: request.body.author,
    };
    const user = await User.findById(request.params.id);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    user.likedblogs.push(data);
    await user.save();
    return response.status(200).json("likedpost saved successfully");
  } catch (error) {
    return response.status(200).json(error);
  }
};
export const getsearchpost = async (request, response) => {
  try {
    const post = await Post.find({ title: request.body.title });
    response.status(200).json(post);
  } catch (err) {
    console.error(error);
    return response
      .status(500)
      .json({ msg: "error while reading a single post" });
  }
};
