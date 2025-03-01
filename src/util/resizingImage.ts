export const smallImage = (imagePath: string, size: number) => {
  const image = imagePath.match(/media\/screenshtos/)
  ? imagePath.replace("media/screenshots", `/media/resize/${size}/-/screenshots/`)
  : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`)

  return image;
}