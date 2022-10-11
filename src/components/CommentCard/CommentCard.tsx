import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconReply, IconPlus, IconMinus, iconButtonStylesReply, iconButtonStylesLike, iconButtonStylesReplySmall, iconButtonStylesDeleteSmall, iconButtonStylesDelete } from './commentCardIcons';
import { cardStyles, cardActionStyles, cardHeaderStyles } from './commentCardStyles'
import { Comment } from '../../common/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../features/commentsSlice';
import { getImgUrl } from '../../common/utils';
import { Data } from '../../common/interfaces';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconEdit } from './commentCardIcons';
import { IconDelete } from './commentCardIcons';

export default function CommentCard(props: Comment) {
   const dispatch = useDispatch()
   const currentUser = useSelector((state: Data) => state.comments.currentUser)
   const { id, content, score, createdAt, user, replyingTo } = props

   return (
      <Card elevation={0} sx={cardStyles} >

         {/* box with likes btns container & small screen reply btn */}
         <Box id='buttonsBox'>
            <CardActions disableSpacing sx={cardActionStyles}>
               <IconButton onClick={() => dispatch(increment(id))} size='small' sx={iconButtonStylesLike.assembleStyles()}>
                  <IconPlus sx={{ fontSize: 10 }} viewBox='0.5 1 10 10' />
               </IconButton>
               <Typography sx={{ fontSize: { xs: 14, sm: 'unset' } }}>
                  {score}
               </Typography>
               <IconButton onClick={() => dispatch(decrement(id))} size='small' sx={iconButtonStylesLike.assembleStyles()}>
                  <IconMinus sx={{ fontSize: 10, fontWeight: 400 }} viewBox='0 -3.5 10 10' />
               </IconButton>
            </CardActions>
            {/* xs screen reply button or edit btns */}
            {
               user.username === currentUser.username
                  ? <Box sx={{ display: 'flex' }}>
                     <IconButton sx={iconButtonStylesDeleteSmall.assembleStyles()}>
                        <IconDelete sx={{ transform: 'translateX(-20%)', fontSize: 13 }} />
                        <Typography fontWeight={500} fontSize={14}>
                           Delete
                        </Typography>
                     </IconButton>
                     <IconButton sx={iconButtonStylesReplySmall.assembleStyles()}>
                        <IconEdit sx={{ transform: 'translateY(25%)', fontSize: 16 }} />
                        <Typography fontWeight={500} fontSize={14}>
                           Edit
                        </Typography>
                     </IconButton>
                  </Box>

                  : <IconButton sx={iconButtonStylesReplySmall.assembleStyles()}>
                     <IconReply sx={{ transform: 'translateY(25%)', fontSize: 16 }} />
                     <Typography fontWeight={500} fontSize={14}>
                        Reply
                     </Typography>
                  </IconButton>
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
                     ? <Box sx={{ display: 'flex' }}>
                        <IconButton sx={iconButtonStylesDelete.assembleStyles()}>
                           <IconDelete sx={{ transform: 'translateY(25%)'}} fontSize="small" />
                           <Typography fontWeight={500} fontSize="inherit">
                              Delete
                           </Typography>
                        </IconButton>
                        <IconButton sx={iconButtonStylesReply.assembleStyles()}>
                           <IconEdit sx={{ transform: 'translateY(25%)'}} fontSize="small"/>
                           <Typography fontWeight={500} fontSize="inherit">
                              Edit
                           </Typography>
                        </IconButton>
                     </Box>

                     : <IconButton sx={iconButtonStylesReply.assembleStyles()}>
                        <IconReply sx={{ transform: 'translateY(25%)' }} fontSize="small" />
                        <Typography fontWeight={500} fontSize="inherit">
                           Reply
                        </Typography>
                     </IconButton>
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
