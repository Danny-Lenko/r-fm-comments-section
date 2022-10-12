import {CardActions, IconButton, Typography} from '@mui/material'
import { IconPlus, IconMinus } from './commentCardIcons';
import { cardActionStyles } from './commentCardStyles';
import { iconButtonStylesLike } from './commentCardIcons';
import { increment, decrement } from '../../features/commentsSlice';
import { useDispatch } from 'react-redux';
import { Comment } from '../../common/interfaces';

const PlusMinusBtns = (props:Comment) => {
   const dispatch = useDispatch()
   const {id, score} = props

   return (
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
   );
}

export default PlusMinusBtns;