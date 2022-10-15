import { createSlice } from '@reduxjs/toolkit'

export const deleteModalSlice = createSlice({
  name: 'deleteModal',
  initialState: {
    open: false
  },
  reducers: {
    handleOpen: (state, action) => {
      state.open = true
    },
    handleClose: (state, action) => {
      state.open = false
    }
  }
})

export const { handleOpen, handleClose } = deleteModalSlice.actions
export default deleteModalSlice.reducer