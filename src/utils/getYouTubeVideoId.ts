export const getYouTubeVideoId = (url: string): string => {
  let videoId = ''
  const parsedUrl = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)

  if (parsedUrl[2] !== undefined) {
    const parsedId = parsedUrl[2].split(/[^0-9a-z_-]/i)
    videoId = parsedId[0]
  } else {
    videoId = url
  }

  return videoId
}

export default getYouTubeVideoId