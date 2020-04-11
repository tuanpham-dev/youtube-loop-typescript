interface YTWindow extends Window {
  YT: any
  onYouTubeIframeAPIReady(): void
}

const loadYouTubeAPI = () => {
  const win = window as any as YTWindow

  return new Promise<typeof win.YT>((resolve) => {
    if (typeof win.YT === 'object' && typeof win.YT.ready === 'function') {
      win.YT.ready(() => {
        resolve(win.YT)
      })

      return
    }

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.append(tag)

    if (!win.onYouTubeIframeAPIReady) {
      win.onYouTubeIframeAPIReady = () => {
        resolve(win.YT)
      }
    }
  })
}

let api: YTWindow['YT']  = null

export const getYouTubeAPI = () => {
  if (!api) {
    api = loadYouTubeAPI()
  }

  return api
}

export default getYouTubeAPI