export function getImgUrl(name:string) {
   return new URL(`${name}`, import.meta.url).href
}