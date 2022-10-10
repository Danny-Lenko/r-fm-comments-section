export interface Data {
   comments: {
     comments: Comment[]
     currentUser: {}
   }
}
export interface RawData {
  comments: Comment[]
  currentUser: {}
}

export interface DataState {
  currentUser: {
    image: {
        png: string;
        webp: string;
    };
    username: string;
    like?: boolean;
    dislike?: boolean;
};
  comments: {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      user: {
          image: {
              png: string;
              webp: string;
          };
          username: string;
      };
      replies: Comment[];
  }[];
}

export interface Comment {
   id: number
   content: string
   score: number
   createdAt: string
   replies: Comment[]
   user: {image: {png: string, webp: string}, username: string}
   replyingTo?: string
   like?: boolean
   dislike?: boolean
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