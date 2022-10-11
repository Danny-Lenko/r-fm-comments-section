import CommentCard from "./CommentCard";
import { Comment } from "./interfaces";
import Box from "@mui/material/Box";

const CommentRepliesSection = (props:Comment) => {
   const repliesBoxStyles = {
      pl: {xs: 3, md: 5, lg: 10},
      position: 'relative',
      mb: 2,
      '&:before': {
         content: '""',
         width: '2px',
         backgroundColor: 'greyCustom.main',
         position: 'absolute',
         top: '5px',
         bottom: '5px',
         left: {xs: '10px', sm: '57px', md: '90px', lg: '120px'}
      }
   }

   return (
      <>
         <CommentCard {...props} />

         {
            props.replies[0] && <Box sx={repliesBoxStyles}>
               { props.replies.map(reply => <CommentCard key={reply.id} {...reply} />) }
            </Box>
         }

      </>
   );
}
 
export default CommentRepliesSection;