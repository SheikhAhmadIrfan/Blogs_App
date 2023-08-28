import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (request, response) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };
    const newUser = new User(user);
    await newUser.save();
    return response
      .status(200)
      .json({ userId: newUser._id, msg: "sign up successful" });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ msg: "Error while sign up", error: error.message });
  }
};

export const loginUser = async (request, response) => {
  console.log(request.body);
  let user = await User.findOne({ username: request.body.username });
  if (!user) {
    return response.status(400).json({ msg: "username not match" });
  }
  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(user.toJSON(), process.env.JWT);
      return response.cookie("access_token", accessToken).status(200).json({
        accessToken: accessToken,
        name: user.name,
        username: user.username,
        id: user._id,
        msg: "you are login successfully",
      });
    } else {
      return response.status(400).json({ msg: "password not match" });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ msg: "error while login user" });
  }
};
export const updateUser = async (request, response) => {
  try {
    const upUser = await User.findByIdAndUpdate(
      request.params.id,
      { $set: request.body },
      { new: true }
    );
    response.status(200).json(upUser);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ msg: "error while updating user" });
  } 
};
export const getUser = async (request, response) => {
  try{ 
      const user=await User.findById(request.params.id);
      response.status(200).json(user);
  }catch(err){
      console.error(err); 
      return response.status(500).json({ msg: "error while reading a single user" });
  }
}
