export interface Data {
   comments: {
     comments: Comment[]
     currentUser: {}
   }
}

export interface Comment {
   id: number
   content: string
   score: number
   createdAt: string
   replies: Comment[]
   user: {image: {png: string, webp: string}, username: string}
}

declare module '@mui/material/styles' {
   interface Palette {
     blueCustom: Palette['primary'];
     redCustom: Palette['primary'];
     greyCustom: Palette['primary'];
   }
 
   interface PaletteOptions {
     blueCustom?: PaletteOptions['primary'];
     redCustom?: PaletteOptions['primary'];
     greyCustom?: PaletteOptions['primary'];
   }
 }