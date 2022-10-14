import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { iconButtonStylesReply, iconButtonStylesReplySmall, iconButtonStylesDeleteSmall, iconButtonStylesDelete } from './commentCardIcons';
import { cardStyles, cardHeaderStyles } from './commentCardStyles'
import { Comment } from '../../common/interfaces'
import { useSelector } from 'react-redux'
import { getImgUrl } from '../../common/utils';
import { Data } from '../../common/interfaces';
import DeleteEditBtns from './DeleteEditBtns';
import PlusMinusBtns from './PlusMinusBtns';
import ReplyBtn from './ReplyBtn';
import TextFieldCard from '../TextFieldCard/TextFieldCard';
import CommentContent from './CommentTextContent';
import { TimeAgo } from './TimeAgo';

export default function CommentCard(props: Comment) {
   const data = useSelector((state: Data) => state.comments)
   const currentUser = data.currentUser
   const replyId = data.replyId
   const isReply = data.isReply
   const isEdit = data.isEdit
   const { createdAt, user, id, date } = props

   return (
      <>
         <Card elevation={0} sx={cardStyles} >
            {/* box with like btns container & small screen reply btn */}
            <Box id='buttonsBox'>
               <PlusMinusBtns {...props} />
               {/* xs screen reply button or edit btns */}
               {
                  user.username === currentUser.username
                     ? <DeleteEditBtns
                        deleteBtnStyles={iconButtonStylesDeleteSmall.assembleStyles()}
                        editBtnStyles={iconButtonStylesReplySmall.assembleStyles()}
                        id={id}
                     />

                     : <ReplyBtn cardInfo={props} replyBtnStyles={iconButtonStylesReplySmall.assembleStyles()} />
               }
            </Box>
            {/* text content box with header & main content */}
            <Box sx={{width: '100%'}}>
               <CardHeader
                  sx={cardHeaderStyles}
                  avatar={
                     <Avatar 
                        sx={{ width: 30, height: 30 }} 
                        src={`../${user.image.png}`} 
                        // src={getImgUrl(user.image.png)} 
                     />
                  }
                  // sm screen reply button
                  action={
                     user.username === currentUser.username
                        ? <DeleteEditBtns
                           deleteBtnStyles={iconButtonStylesDelete.assembleStyles()}
                           editBtnStyles={iconButtonStylesReply.assembleStyles()}
                           id={id}
                        />

                        : <ReplyBtn cardInfo={props} replyBtnStyles={iconButtonStylesReply.assembleStyles()} />
                  }
                  title={user.username}
                  subheader={date ? <TimeAgo timestamp={date} /> : createdAt}
               />
               <CommentContent {...props} />
            </Box>
         </Card>

         {
            (replyId === id && isReply && !isEdit) && <TextFieldCard />
         }
      </>
   );
}
