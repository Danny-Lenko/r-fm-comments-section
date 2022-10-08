import { createSlice } from '@reduxjs/toolkit'
import data from '../data/data.json'

export const commentsSlice = createSlice({
  name: 'data',
  initialState: data,
  reducers: {
    increment: state => {
      console.log(state)
    }
  }
})

export const { increment } = commentsSlice.actions

export default commentsSlice.reducer