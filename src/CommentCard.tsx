import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { createSvgIcon } from '@mui/material/utils';
import { Theme } from '@mui/material/styles';


export default function CommentCard() {

   const IconReply = createSvgIcon(
      <path width={'24px'} height='24px' d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />,
      'IconReply',
   );

   const iconButtonStyles = {
      color: 'blueCustom.main',
      transition: (theme: Theme) => theme.transitions.create('all', {
         duration: theme.transitions.duration.standard,
      }),
      '&:hover': {
         bgcolor: 'unset',
         color: 'blueCustom.light'
      }
   }

   return (
      <Card elevation={0} sx={{ mx: 10, pt: 1, px: 1 }}>
         <CardHeader
            avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
               </Avatar>
            }
            action={
               <IconButton sx={iconButtonStyles}>
                  <IconReply sx={{ transform: 'translateY(25%)' }} />
                  <Typography fontWeight={500}>
                     Reply
                  </Typography>
               </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
         />
         <CardContent>
            <Typography variant="body2" color="text.secondary">
               This impressive paella is a perfect party dish and a fun meal to cook
               together with your guests. Add 1 cup of frozen peas along with the mussels,
               if you like.
            </Typography>
         </CardContent>
         <CardActions disableSpacing>

         </CardActions>
      </Card>
   );
}
