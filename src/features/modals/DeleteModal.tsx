import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { DelModal } from '../../common/interfaces';
import { useDispatch } from 'react-redux';
import { handleClose } from './deleteModalSlice';
import { deleteComment } from '../commentsSlice';
import { Data } from '../../common/interfaces';

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   minWidth: 300,
   maxWidth: 350,
   bgcolor: 'background.paper',
   borderRadius: 2,
   boxShadow: 24,
   p: 4,
};

export default function DeleteModal() {
   const modalState = useSelector((state: DelModal) => state.deleteModal)
   const delId = useSelector((state: Data) => state.comments.delId)
   const dispatch = useDispatch()

   return (
      <div>
         <Modal
            open={modalState.open}
            onClose={() => dispatch(handleClose('close'))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Delete comment
               </Typography>
               <Typography id="modal-modal-description" fontSize={14} sx={{ mt: 2, color: 'greyCustom.dark' }}>
                  Are you sure you want to delete this comment? This will remove the comment and can't be undone.
               </Typography>
               <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', transform: 'translateY(30%)'}}>
                  <Button
                     variant='contained'
                     onClick={() => dispatch(handleClose('close'))}
                     sx={{ bgcolor: 'greyCustom.dark', '&:hover': { bgcolor: 'blueCustom.light' }, fontWeight: 400 }}
                  >
                     NO, CANCEL
                  </Button>
                  <Button
                     variant='contained'
                     sx={{ bgcolor: 'redCustom.main', '&:hover': { bgcolor: 'redCustom.light' }, fontWeight: 400 }}
                     onClick={() => {
                        dispatch(deleteComment(delId))
                        dispatch(handleClose('close'))
                     }}
                  >
                     YES, DELETE
                  </Button>

               </Box>
            </Box>
         </Modal>
      </div>
   );
}
