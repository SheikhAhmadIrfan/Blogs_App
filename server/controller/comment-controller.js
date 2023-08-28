import Comment from "../model/comment.js"
import Post from "../model/post.js";

export const newComment=async (request,response)=>{
    try{
        const comment=await new Comment(request.body);
        comment.save();
        return response.status(200).json( {msg:"comment given successfully" });
    }catch(error){
        return response.status(200).json( error );
    }
}
export const addComment = async (request, response) => {
    try {
        const upPost = await Post.findByIdAndUpdate(request.params.id, { $addToSet: request.body }, { new: true });
        response.status(200).json(upPost)
    } catch (error) {
        console.error(error);
        return response.status(500).json({ msg: "error while updating post" });
    }
}
export const getComment = async (request, response) => {
    try{ 
        const post=await Post.findById(request.params.id);
        const { comments } = post;
        response.status(200).json({ comments });
    }catch(error){
        console.error(error);
        return response.status(500).json({ msg: "error while giving commentx" });
    }
}