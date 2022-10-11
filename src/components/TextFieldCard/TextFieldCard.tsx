import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { getImgUrl } from "../../common/utils";
import { useSelector } from "react-redux";
import { Data } from "../../common/interfaces";
import { textCardStyles, avatarStyles, textFieldStyles } from "./TextFieldCardStyles";
import { useDispatch } from "react-redux";
import { addComment } from '../../features/commentsSlice'
import { defineNextId } from "../../common/utils";
import { useState } from 'react'
import { Comment } from "../../common/interfaces";

const TextFieldCard = () => {
   const data = useSelector((state: Data) => state.comments)
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
            label="Add a comment..."
            variant="outlined"
            value={text}
            onChange={ (e) => {setText(e.target.value)} }
         />
         <Button
            onClick={ () => dispatch(addComment(newCommentObj)) }
            variant="contained" 
            sx={{ ml: 'auto', bgcolor: 'blueCustom.main' }}
         >
            Send
         </Button>
      </Card>
   );
}

export default TextFieldCard;