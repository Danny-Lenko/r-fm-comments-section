import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { getImgUrl } from "./utils";
import { useSelector } from "react-redux";
import { Data } from "./interfaces";

const TextFieldCard = () => {
   const state = useSelector((state: Data) => state)
   const userAvatar = state.comments.currentUser.image.png
   const textCardStyles = {
      mx: { xs: 1, sm: 7, md: 10 },
      py: 2,
      px: 2,
      display: 'flex',
      flexDirection: {xs: 'column', sm: 'row'},
      gap: 2,
      alignItems: 'start',
      borderRadius: 2,
   }

   const textFieldStyles = {
      '& .MuiOutlinedInput-root': {
         '& fieldset': {
            borderColor: 'greyCustom.main',
         },
      },
      '& label.Mui-focused': {
         color: 'blueCustom.main',
      },
      '&.Mui-focused fieldset': {
         borderColor: 'blueCustom.main',
      },
   }

   const avatarStyles = {
      width: 35,
      height: 35,
      order: {xs: 1, sm: 'unset'},
      mt: {xs: '-50px', sm: 'unset'}
   }

   return (
      <Card elevation={0} sx={textCardStyles} >
         <Avatar sx={avatarStyles} src={ getImgUrl(userAvatar) } />
            <TextField
               multiline
               rows={3}
               fullWidth
               size="small"
               sx={textFieldStyles}
               id="outlined-basic"
               label="Add a comment..."
               variant="outlined"
            />
         <Button variant="contained" sx={{ ml: 'auto', bgcolor: 'blueCustom.main' }}>Send</Button>
      </Card>
   );
}

export default TextFieldCard;