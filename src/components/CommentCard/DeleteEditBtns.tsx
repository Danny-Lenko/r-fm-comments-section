import { Box, IconButton, Typography } from '@mui/material'
import { IconDelete, IconEdit } from "./commentCardIcons";
import { deleteComment, setDeleteId, editComment } from '../../features/commentsSlice';
import { handleOpen } from '../../features/modals/deleteModalSlice';
import { useDispatch } from 'react-redux';

const DeleteEditBtns = (props: {deleteBtnStyles: {}, editBtnStyles: {}, id: number}) => {
   const dispatch = useDispatch()

   return (
      <Box sx={{ display: 'flex' }}>
         <IconButton 
            sx={props.deleteBtnStyles} 
            onClick={ () => {
               dispatch(setDeleteId(props.id))
               dispatch(handleOpen('open'))  
            }} 
            // onClick={ () => dispatch(deleteComment(props.id)) } 
         >
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

