import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconReply, IconPlus, IconMinus, iconButtonStylesReply, iconButtonStylesLike, iconButtonStylesReplySmall } from './commentCardIcons';
import { cardStyles, cardActionStyles, cardHeaderStyles } from './commentCardStyles'
import { Comment } from './interfaces'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/commentsSlice';


export default function CommentCard(props:Comment) {
   const dispatch = useDispatch()
   const {id, content, score, createdAt, replies, user, replyingTo, like, dislike} = props

   function getImgUrl(name:string) {
      return new URL(`${name}`, import.meta.url).href
   }

   return (
      <Card elevation={0} sx={cardStyles} >
         {/* box with likes btns container & small screen reply btn */}
         <Box id='buttonsBox'>
            <CardActions disableSpacing sx={cardActionStyles}>
               <IconButton disabled={like} onClick={() => dispatch(increment(id))} size='small' sx={iconButtonStylesLike.assembleStyles()}>
                  <IconPlus sx={{ fontSize: 10 }} viewBox='0.5 1 10 10' />
               </IconButton>
               <Typography >
                  {score}
               </Typography>
               <IconButton disabled={dislike} onClick={() => dispatch(decrement(id))} size='small' sx={iconButtonStylesLike.assembleStyles()}>
                  <IconMinus sx={{ fontSize: 10, fontWeight: 400 }} viewBox='0 -3.5 10 10' />
               </IconButton>
            </CardActions>
            {/* xs screen reply button */}
            <IconButton sx={iconButtonStylesReplySmall.assembleStyles()}>
               <IconReply sx={{ transform: 'translateY(25%)' }} />
               <Typography fontWeight={500}>
                  Reply
               </Typography>
            </IconButton>
         </Box>
         {/* text content box with header & main content */}
         <Box>
            <CardHeader
               sx={cardHeaderStyles}
               avatar={
                  <Avatar sx={{ width: 30, height: 30 }} src={ getImgUrl(user.image.png) } />
               }
               // sm screen reply button
               action={
                  <IconButton sx={iconButtonStylesReply.assembleStyles()}>
                     <IconReply sx={{ transform: 'translateY(25%)' }} />
                     <Typography fontWeight={500}>
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
                        sx={{fontWeight: 500, fontSize: 'inherit', mr: 0.7, color: 'blueCustom.main'}} 
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
