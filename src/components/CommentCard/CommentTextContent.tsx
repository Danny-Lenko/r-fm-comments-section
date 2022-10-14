import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Comment } from "../../common/interfaces";
import { useSelector } from "react-redux";
import { Data } from "../../common/interfaces";
import EditContent from "./EditContent";

const CommentContent = (props: Comment) => {
   const { replyingTo, content, id } = props
   const data = useSelector((state: Data) => state.comments)
   const isEdit = data.isEdit
   const editId = data.editId

   return (
      <CardContent>
         {
            isEdit && editId === id
               ? <EditContent />
               : <Typography variant="body2" color='greyCustom.dark'>
                  {replyingTo &&
                     <Typography
                        sx={{ fontWeight: 500, fontSize: 'inherit', mr: 0.7, color: 'blueCustom.main' }}
                        component='span'
                     >
                        @{replyingTo}
                     </Typography>
                  }
                  {content}
               </Typography>
         }
      </CardContent>

   );
}

export default CommentContent;