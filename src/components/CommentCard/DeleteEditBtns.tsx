import { Box, IconButton, Typography } from '@mui/material'
import { IconDelete, IconEdit } from "./commentCardIcons";

const DeleteEditBtns = (props: {deleteBtnStyles: {}, editBtnStyles: {}}) => {

   return (
      <Box sx={{ display: 'flex' }}>
         <IconButton sx={props.deleteBtnStyles}>
            <IconDelete sx={{ transform: 'translateY(25%)' }} fontSize="small" />
            <Typography fontWeight={500} fontSize="inherit">
               Delete
            </Typography>
         </IconButton>
         <IconButton sx={props.editBtnStyles}>
            <IconEdit sx={{ transform: 'translateY(25%)' }} fontSize="small" />
            <Typography fontWeight={500} fontSize="inherit">
               Edit
            </Typography>
         </IconButton>
      </Box>
   );
}

export default DeleteEditBtns;

