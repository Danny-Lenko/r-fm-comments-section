export const textCardStyles = {
   mx: { xs: 1, sm: 7, md: 10 },
   py: 2,
   px: 2,
   display: 'flex',
   flexDirection: { xs: 'column', sm: 'row' },
   gap: 2,
   alignItems: 'start',
   borderRadius: 2,
}

export const textFieldStyles = {
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

export const avatarStyles = {
   width: 35,
   height: 35,
   order: { xs: 1, sm: 'unset' },
   mt: { xs: '-50px', sm: 'unset' }
}
