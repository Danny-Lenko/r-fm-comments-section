export const cardStyles = {
   mx: { xs: 1, sm: 7, md: 10 },
   pt: 1,
   px: 1,
   display: 'flex',
   flexDirection: { xs: 'column-reverse', sm: 'row' },
   alignItems: 'center',
   borderRadius: 2,
   // '*': {
   //    px: {xs: 0, sm: 'unset'}
   // }
}

export const cardActionStyles = {
   display: 'flex',
   flexDirection: { xs: 'row', sm: 'column' },
   bgcolor: 'greyCustom.light',
   ml: 2,
   mr: 1,
   borderRadius: 2,
   '& .MuiTypography-body1': {
      fontWeight: 500,
      color: 'blueCustom.main',
      my: { xs: 0, sm: 1 },
      mx: { xs: 1.5, sm: 0 }
   }
}

// fontWeight={500} sx={{color: 'blueCustom.main', my: 1}}

export const cardHeaderStyles = {
   '& .MuiCardHeader-content': {
      display: 'flex',
      gap: 1.5
   },
   '& .MuiCardHeader-title': {
      fontWeight: 500
   },
   '& .MuiCardHeader-subheader': {
      color: 'greyCustom.dark',
   },
   '& .MuiCardHeader-action': {
      display: { xs: 'none', sm: 'block' }
   }
}
