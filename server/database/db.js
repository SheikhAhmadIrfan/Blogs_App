import mongoose from "mongoose";

const Connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.dgcriot.mongodb.net/blogs?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log("connection done")
    }catch(error){
        console.log("error")
    }
}

export default Connection;