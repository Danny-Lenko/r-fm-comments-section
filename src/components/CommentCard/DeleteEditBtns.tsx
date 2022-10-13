import { Box, IconButton, Typography } from '@mui/material'
import { IconDelete, IconEdit } from "./commentCardIcons";
import { deleteComment, editComment } from '../../features/commentsSlice';
import { useDispatch } from 'react-redux';

const DeleteEditBtns = (props: {deleteBtnStyles: {}, editBtnStyles: {}, id: number}) => {
   const dispatch = useDispatch()

   return (
      <Box sx={{ display: 'flex' }}>
         <IconButton sx={props.deleteBtnStyles} onClick={ () => dispatch(deleteComment(props.id)) } >
            <IconDelete sx={{ transform: 'translateY(25%)' }} fontSize="small" />
            <Typography fontWeight={500} fontSize="inherit">
               Delete
            </Typography>
         </IconButton>
         <IconButton sx={props.editBtnStyles} onClick={ () => dispatch(editComment(props.id)) }>
            <IconEdit sx={{ transform: 'translateY(25%)' }} fontSize="small" />
            <Typography fontWeight={500} fontSize="inherit">
               Edit
            </Typography>
         </IconButton>
      </Box>
   );
}

export default DeleteEditBtns;

