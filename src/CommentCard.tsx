import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { IconReply, IconPlus, IconMinus, iconButtonStylesReply, iconButtonStylesLike, iconButtonStylesReplySmall } from './commentCardIcons';
import { cardStyles, cardActionStyles, cardHeaderStyles } from './commentCardStyles'
import { Comment } from './interfaces'


export default function CommentCard(props:Comment) {
   console.log(props)
   const {id, content, score} = props

   return (
      <Card elevation={0} sx={cardStyles} >
         {/* box with likes btns container & small screen reply btn */}
         <Box id='buttonsBox'>
            <CardActions disableSpacing sx={cardActionStyles}>
               <IconButton size='small' sx={iconButtonStylesLike.assembleStyles()}>
                  <IconPlus sx={{ fontSize: 10 }} viewBox='0.5 1 10 10' />
               </IconButton>
               <Typography >
                  {score}
               </Typography>
               <IconButton size='small' sx={iconButtonStylesLike.assembleStyles()}>
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
                  <Avatar sx={{ bgcolor: red[500], width: 30, height: 30 }} aria-label="recipe">
                     {id}
                  </Avatar>
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
               title="Shrimp"
               subheader="September 14"
            />
            <CardContent>
               <Typography variant="body2" color='greyCustom.dark'>
                  {content}
               </Typography>
            </CardContent>
         </Box>
      </Card>
   );
}
