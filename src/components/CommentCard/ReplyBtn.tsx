import { IconButton, Typography } from '@mui/material'
import { IconReply } from './commentCardIcons';

const ReplyBtn = (props: {replyBtnStyles: {}}) => {
   return (
      <IconButton sx={props.replyBtnStyles}>
         <IconReply sx={{ transform: 'translateY(25%)' }} fontSize="small" />
         <Typography fontWeight={500} fontSize="inherit">
            Reply
         </Typography>
      </IconButton>
   );
}

export default ReplyBtn;