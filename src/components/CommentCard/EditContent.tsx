import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Data } from "../../common/interfaces";
import { textFieldStyles } from "../TextFieldCard/TextFieldCardStyles";
import { useDispatch } from "react-redux";
import { updateComment } from '../../features/commentsSlice'
import { useState } from 'react'
import { Comment } from "../../common/interfaces";
import { findCurrentComment } from "../../common/utils";
import Box from "@mui/material/Box";

const EditContent = () => {
   const data = useSelector((state: Data) => state.comments)
   const comments = data.comments
   const dispatch = useDispatch()
   const currentComment: Comment | null = findCurrentComment(comments, data.editId)
   const [text, setText] = useState(currentComment!.content)

   return (
      <>
         <TextField
            multiline
            rows={3}
            fullWidth
            size="small"
            sx={textFieldStyles}
            id="outlined-basic"
            label={currentComment!.replyingTo ? `@` + currentComment!.replyingTo : 'Edit your comment'}
            variant="outlined"
            value={text}
            onChange={(e) => { setText(e.target.value) }}
         />
         <Box sx={{width: '100%', position: 'relative', textAlign: 'end'}}>
            <Button
               disabled={text ? false : true}
               onClick={() => dispatch(updateComment({id:currentComment!.id, text:text}))}
               variant="contained"
               sx={{ mt: 2, bgcolor: 'blueCustom.main' }}
            >
               Update
            </Button>
         </Box>
      </>
   );
}

export default EditContent;