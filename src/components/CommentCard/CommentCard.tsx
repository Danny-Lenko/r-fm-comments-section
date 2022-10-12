import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconReply, iconButtonStylesReply, iconButtonStylesReplySmall, iconButtonStylesDeleteSmall, iconButtonStylesDelete } from './commentCardIcons';
import { cardStyles, cardHeaderStyles } from './commentCardStyles'
import { Comment } from '../../common/interfaces'
import { useSelector } from 'react-redux'
import { getImgUrl } from '../../common/utils';
import { Data } from '../../common/interfaces';
import DeleteEditBtns from './DeleteEditBtns';
import PlusMinusBtns from './PlusMinusBtns';
import ReplyBtn from './ReplyBtn';

export default function CommentCard(props: Comment) {
   const currentUser = useSelector((state: Data) => state.comments.currentUser)
   const { content, createdAt, user, replyingTo } = props

   return (
      <Card elevation={0} sx={cardStyles} >

         {/* box with likes btns container & small screen reply btn */}
         <Box id='buttonsBox'>
            <PlusMinusBtns {...props} />
            {/* xs screen reply button or edit btns */}
            {
               user.username === currentUser.username
                  ? <DeleteEditBtns
                     deleteBtnStyles={iconButtonStylesDeleteSmall.assembleStyles()}
                     editBtnStyles={iconButtonStylesReplySmall.assembleStyles()}
                  />

                  : <ReplyBtn replyBtnStyles={iconButtonStylesReplySmall.assembleStyles()} />
            }
         </Box>

         {/* text content box with header & main content */}
         <Box>
            <CardHeader
               sx={cardHeaderStyles}
               avatar={
                  <Avatar sx={{ width: 30, height: 30 }} src={getImgUrl(user.image.png)} />
               }
               // sm screen reply button
               action={
                  user.username === currentUser.username
                     ? <DeleteEditBtns
                        deleteBtnStyles={iconButtonStylesDelete.assembleStyles()}
                        editBtnStyles={iconButtonStylesReply.assembleStyles()}
                     />

                     : <ReplyBtn replyBtnStyles={iconButtonStylesReply.assembleStyles()} />
               }
               title={user.username}
               subheader={createdAt}
            />
            <CardContent>
               <Typography variant="body2" color='greyCustom.dark'>
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
            </CardContent>
         </Box>
      </Card>
   );
}
