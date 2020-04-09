import {
  Video,
  State,
  ActionType,
  ReducerMap,
  ADD_VIDEO_BY_YOUTUBE_ID,
  ADD_VIDEO,
  REMOVE_VIDEO,
  EDIT_VIDEO,
  UPDATE_VIDEOS,
  PLAY_VIDEO,
  PLAY_FIRST_VIDEO,
  PLAY_PREVIOUS_VIDEO,
  PLAY_NEXT_VIDEO,
  ReducerHandler
} from "./types";

const initialState: State = {
  videos: [],
  playingVideo: null
}

const reducerMap: ReducerMap = {
  [ADD_VIDEO_BY_YOUTUBE_ID]: (state, { payload: youtubeId }) => {
    const maxId = Math.max(...state.videos.map(video => video.id), 0)
    const video: Video = {
      id: maxId + 1,
      youtubeId,
      volume: null,
      range: [null, null]
    }

    return {
      ...state,
      videos: [...state.videos, video]
    }
  },

  [ADD_VIDEO]: (state, { payload: video }) => {
    const maxId = Math.max(...state.videos.map(video => video.id), 0)

    return {
      ...state,
      videos: [...state.videos, { ...video, id: maxId + 1 }]
    }
  },

  [REMOVE_VIDEO]: (state, { payload: videoId }) => {
    const index = state.videos.findIndex(video => video.id === videoId)
    let playingVideo: number | null = null

    if (index !== null) {
      if (state.playingVideo === videoId) {
        if (state.videos.length <= 1) {
          playingVideo = null
        } else {
          playingVideo = state.videos[index === state.videos.length - 1 ? 0 : index + 1].id
        }
      }

      const videos = [...state.videos]
      videos.splice(index, 1)

      if (playingVideo !== null) {
        return {
          ...state,
          videos,
          playingVideo
        }
      } else {
        return {
          ...state,
          videos
        }
      }
    }

    return state
  },

  [EDIT_VIDEO]: (state, { payload: video }) => {
    const index = state.videos.findIndex(videoItem => videoItem.id === video.id)

    if (index !== null) {
      const videos = [...state.videos]
      videos.splice(index, 1, video)

      return {
        ...state,
        videos
      }
    }

    return state
  },

  [UPDATE_VIDEOS]: (state, { payload: videos }) => {
    return {
      ...state,
      videos
    }
  },

  [PLAY_VIDEO]: (state, { payload: videoId }) => {
    if (state.playingVideo !== videoId) {
      return {
        ...state,
        playingVideo: videoId
      }
    }

    return state
  },

  [PLAY_FIRST_VIDEO]: (state) => {
    if (state.videos.length > 0) {
      return {
        ...state,
        playingVideo: state.videos[0].id
      }
    }

    return state
  },

  [PLAY_PREVIOUS_VIDEO]: (state) => {
    if (state.videos.length > 0) {
      let previousVideoIndex
      const index = state.videos.findIndex(video => video.id === state.playingVideo)
  
      if (index === 0) {
        previousVideoIndex = state.videos.length - 1
      } else {
        previousVideoIndex = index -1
      }

      return {
        ...state,
        playingVideo: state.videos[previousVideoIndex].id
      }
    }

    return state
  },

  [PLAY_NEXT_VIDEO]: (state) => {
    if (state.videos.length > 0) {
      let nextVideoIndex
      const index = state.videos.findIndex(video => video.id === state.playingVideo)

      if (index === state.videos.length - 1) {
        nextVideoIndex = 0
      } else {
        nextVideoIndex = index + 1
      }

      return {
        ...state,
        playingVideo: state.videos[nextVideoIndex].id
      }
    }

    return state
  }
}

export const rootReducer = (state = initialState, action: ActionType): State => {
  if (typeof reducerMap[action.type] === 'function') {
    const reducerHandler = reducerMap[action.type] as ReducerHandler<typeof action.type>

    return reducerHandler(state, action)
  } else {
    return state
  }
}

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer