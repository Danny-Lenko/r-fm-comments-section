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