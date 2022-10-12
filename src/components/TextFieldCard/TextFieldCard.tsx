import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { getImgUrl } from "../../common/utils";
import { useSelector } from "react-redux";
import { Data } from "../../common/interfaces";
import { textCardStyles, avatarStyles, textFieldStyles } from "./TextFieldCardStyles";
import { useDispatch } from "react-redux";
import { addComment, addReply } from '../../features/commentsSlice'
import { defineNextId, defineCommentId } from "../../common/utils";
import { useState } from 'react'
import { Comment } from "../../common/interfaces";

const TextFieldCard = () => {
   const data = useSelector((state: Data) => state.comments)
   const comments = data.comments
   const userAvatar = data.currentUser.image.png
   const dispatch = useDispatch()
   const [text, setText] = useState('')
   const newCommentObj: Comment = {
      id: defineNextId(data.comments),
      content: text,
      score: 0,
      createdAt: 'just now',
      replies: [],
      user: data.currentUser
   }

   const newReplyObj: Comment = {
      id: defineNextId(data.comments),
      content: text,
      score: 0,
      createdAt: 'just now',
      user: data.currentUser,
      replyingTo: data.replyName
   }

   const isReply = data.isReply
   const replyId = data.replyId
   const commentId = replyId ? defineCommentId(comments, replyId) : null
   console.log(data.replyName)

   return (
      <Card elevation={0} sx={textCardStyles} >
         <Avatar sx={avatarStyles} src={ getImgUrl(userAvatar) } />
         <TextField
            multiline
            rows={3}
            fullWidth
            size="small"
            sx={textFieldStyles}
            id="outlined-basic"
            label={data.replyName ? `@${data.replyName}` : "Add a comment..."}
            variant="outlined"
            value={text}
            onChange={ (e) => {setText(e.target.value)} }
         />
         <Button
            disabled={text ? false : true}
            onClick={ () => {
               if (isReply) {
                  dispatch(addReply( {info: newReplyObj, commentId: commentId} ))
               } else {
                  dispatch(addComment(newCommentObj))
               }
               setText('')
            } }
            variant="contained" 
            sx={{ ml: 'auto', bgcolor: 'blueCustom.main' }}
         >
            Send
         </Button>
      </Card>
   );
}

export default TextFieldCard;