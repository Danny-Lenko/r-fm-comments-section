import { createSlice } from '@reduxjs/toolkit'
import data from '../data/data.json'
import { Comment } from '../common/interfaces'

const restoredComments: Comment[] = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')!) : data.comments

export const commentsSlice = createSlice({
  name: 'comments',
  // initialize state adding like and dislike properties to each comment and reply & ids for buttons interaction
  initialState: {
    ...data,
    replyId:null,
    replyName:null,
    delId:null, 
    editId:null,
    isReply:false,
    isEdit:false,
    date:null,
    comments: restoredComments.map(comment => (
      {...comment, like:false, dislike:false, replies: comment.replies!.map(reply => (
        {...reply, like:false, dislike:false}
      ))}
    ))
  },
  // ------- reducers
  reducers: {
    // increment on plus btn click
    increment: (state, action) => {
      state.comments.map(comment => {
        if (comment.id === action.payload && comment.like) {
          comment.like = false
          comment.score--
          return
        }
        if (comment.id === action.payload && !comment.like) {
            comment.like = true
            comment.score++
            if (comment.dislike) {
              comment.dislike = false
              comment.score++
            }
        } else {
          comment.replies.map(reply => {
            if (reply.id === action.payload && reply.like) {
              reply.like = false
              reply.score--
              return
            }
            if (reply.id === action.payload && !reply.like) {
              reply.like = true
              reply.score++
              if (reply.dislike) {
                reply.dislike = false
                reply.score++
              }
            }
          })
        }
      })
      localStorage.setItem('comments', JSON.stringify(state.comments))
    },
    // decrement on minus btn click
    decrement: (state, action) => {
      state.comments.map(comment => {
        if (comment.id === action.payload && comment.dislike) {
          comment.dislike = false
          comment.score++
          return
        }
        if (comment.id === action.payload && !comment.dislike) {
            comment.dislike = true
            comment.score--
            if (comment.like) {
              comment.like = false
              comment.score--
            }
        } else {
          comment.replies.map(reply => {
            if (reply.id === action.payload && reply.dislike) {
              reply.dislike = false
              reply.score++
              return
            }
            if (reply.id === action.payload && !reply.dislike) {
              reply.dislike = true
              reply.score--
              if (reply.like) {
                reply.like = false
                reply.score--
              }
            }
          })
        }
      })
      localStorage.setItem('comments', JSON.stringify(state.comments))
    },
    // add new comment
    addComment: (state, action) => {
      if (action.payload.content) {
        state.comments.push(action.payload)
      }
      localStorage.setItem('comments', JSON.stringify(state.comments))
    },
    // open reply
    openReply: (state, action) => {
      if (state.replyId === action.payload.id && state.isReply) {
        state.isReply = false
        return
      }
      state.replyId = action.payload.id
      state.replyName = action.payload.user.username
      state.isReply = true
      state.isEdit = false
    },
    // add new reply
    addReply: (state, action) => {
      state.comments.map(comment => comment.id === action.payload.commentId 
        ? comment.replies.push(action.payload.info)
        : comment
      )
      state.isReply = false
      localStorage.setItem('comments', JSON.stringify(state.comments))
    },
    // delete comment or reply
    deleteComment: (state, action) => {
      state.comments.forEach(comment => {
        if (comment.id !== action.payload) {
          comment.replies = comment.replies.filter(reply => reply.id !== action.payload)
        }
      })
      state.comments = state.comments.filter(comment => comment.id !== action.payload)
      state.isEdit = false
      state.isReply = false
      localStorage.setItem('comments', JSON.stringify(state.comments))
    },
    setDeleteId: (state, action) => {
      state.delId = action.payload
    },
    // edit comment or reply
    editComment: (state, action) => {
      state.editId = action.payload
      state.isEdit = !state.isEdit
      state.isReply = false
      localStorage.setItem('comments', JSON.stringify(state.comments))
    },
    // update comment or reply
    updateComment: (state, action) => {
      console.log(action.payload)
      state.comments.forEach(comment => {
        if (comment.id !== action.payload.id) {
          comment.replies = comment.replies.map(reply => reply.id === action.payload.id ? {...reply, content: action.payload.text} : reply)
        }
      })
      state.comments = state.comments.map(comment => comment.id === action.payload.id ? {...comment, content: action.payload.text} : comment)
      state.isEdit = false
      localStorage.setItem('comments', JSON.stringify(state.comments))
    }
  }
})

export const { 
  increment, 
  decrement, 
  addComment, 
  openReply, 
  addReply, 
  deleteComment,
  setDeleteId,
  editComment,
  updateComment
} = commentsSlice.actions
export default commentsSlice.reducer