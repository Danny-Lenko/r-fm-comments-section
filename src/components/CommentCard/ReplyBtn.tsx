import { IconButton, Typography } from '@mui/material'
import { IconReply } from './commentCardIcons';
import { openReply } from '../../features/commentsSlice';
import { Comment } from '../../common/interfaces';
import { useDispatch } from 'react-redux';

const ReplyBtn = (props: {replyBtnStyles: {}, cardInfo:Comment}, ) => {
   const dispatch = useDispatch()

   return (
      <IconButton sx={props.replyBtnStyles} onClick={ () => dispatch(openReply(props.cardInfo)) }>
         <IconReply sx={{ transform: 'translateY(25%)' }} fontSize="small" />
         <Typography fontWeight={500} fontSize="inherit">
            Reply
         </Typography>
      </IconButton>
   );
}

export default ReplyBtn;