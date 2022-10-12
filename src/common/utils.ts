import { Comment } from "./interfaces"

export function getImgUrl(name:string) {
   return new URL(`../${name}`, import.meta.url).href
}

export function defineNextId(arr: Comment[]) {
   const ids: number[] = []
   arr.forEach(comment => {
      ids.push(comment.id)
      comment.replies!.forEach(reply => {
         ids.push(reply.id)
      })
   })
   return ids[ids.length - 1] + 1
}

export function defineCommentId(arr: Comment[], replyId: number) {
   let commentId: (number | null) = null
   arr.forEach(comment => {
      if (comment.id === replyId) {
         commentId = comment.id
      } else {
         comment.replies!.forEach(reply => {
            if (reply.id === replyId) {
               commentId = comment.id
            }
         })
      }
   })
   return commentId
}