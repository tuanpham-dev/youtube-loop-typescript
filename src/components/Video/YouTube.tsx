import React, { FunctionComponent, useRef, useEffect } from 'react'
import loadYouTubeAPI from '../../utils/loadYouTubeAPI'
import { YOUTUBE_PLAYER_STATE_PLAYING, YOUTUBE_PLAYER_STATE_PAUSED, YOUTUBE_PLAYER_STATE_ENDED } from '../../utils/constants'

type YouTubeProps = {
  youtubeId: string
  onReady?: (player: any) => void
  onPlaying?: () => void
  onPaused?: () => void
  onEnded?: () => void
  onError?: () => void
}

const YouTube: FunctionComponent<YouTubeProps> = ({ youtubeId, onReady, onPlaying, onPaused, onEnded, onError }) => {
  const container = useRef<HTMLDivElement>(null)

  const handleReady = (player: any) => {
    if (typeof onReady === 'function') {
      onReady(player)
    }
  }

  const handleError = () => {
    if (typeof onError === 'function') {
      onError()
    }
  }

  const handleStateChange = (event: any, player: any) => {
    if (event.data === YOUTUBE_PLAYER_STATE_PLAYING) {
      if (typeof onPlaying === 'function') {
        onPlaying()
      }
    } else if (event.data === YOUTUBE_PLAYER_STATE_PAUSED) {
      if (typeof onPaused === 'function') {
        onPaused()
      }
    } else if (event.data === YOUTUBE_PLAYER_STATE_ENDED) {
      if (typeof onEnded === 'function') {
        player.stopVideo()
        onEnded()
      }
    }
  }

  useEffect(() => {
    loadYouTubeAPI().then((YT: any) => {
      if (container.current) {
        const player = new YT.Player(container.current, {
          videoId: youtubeId,
          events: {
            onReady: () => handleReady(player),
            onError: handleError,
            onStateChange: (event: any) => handleStateChange(event, player)
          }
        })
      }
    })
  })

  return (
    <div ref={container}></div>
  )
}

export default YouTube
