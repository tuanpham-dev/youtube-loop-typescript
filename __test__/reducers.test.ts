import rootReducer from '../src/store/reducers'
import mockData from './mock-data/video'
import { ADD_VIDEO_BY_YOUTUBE_ID, ADD_VIDEO, REMOVE_VIDEO, EDIT_VIDEO, UPDATE_VIDEOS, PLAY_VIDEO, PLAY_FIRST_VIDEO, PLAY_PREVIOUS_VIDEO, PLAY_NEXT_VIDEO } from '../src/store/types'

const initialState = {
  videos: [],
  playingVideo: null
}

describe('root reducer', () => {
  it('should return the initial state', () => {
    const reducer = rootReducer(undefined, {} as any)

    expect(reducer).toEqual(initialState)
    expect(reducer).toMatchSnapshot()
  })

  it('should handle ADD_VIDEO_BY_YOUTUBE_ID', () => {
    expect(rootReducer(initialState, {
      type: ADD_VIDEO_BY_YOUTUBE_ID,
      payload: mockData.youtubeId
    })).toMatchSnapshot()

    expect(rootReducer({
      ...initialState,
      videos: [mockData.video]
    }, {
      type: ADD_VIDEO_BY_YOUTUBE_ID,
      payload: mockData.youtubeId
    })).toMatchSnapshot()
  })

  it('should handle ADD_VIDEO', () => {
    expect(rootReducer(initialState, {
      type: ADD_VIDEO,
      payload: mockData.video
    })).toMatchSnapshot()

    expect(rootReducer({
      ...initialState,
      videos: mockData.videos
    }, {
      type: ADD_VIDEO,
      payload: mockData.video
    })).toMatchSnapshot()
  })

  it('should handle REMOVE_VIDEO', () => {
    expect(rootReducer({
      ...initialState,
      videos: mockData.videos
    }, {
      type: REMOVE_VIDEO,
      payload: mockData.videos[1].id
    })).toMatchSnapshot()

    expect(rootReducer({
      videos: mockData.videos,
      playingVideo: mockData.videos[1].id
    }, {
      type: REMOVE_VIDEO,
      payload: mockData.videos[1].id
    })).toMatchSnapshot()

    expect(rootReducer({
      videos: mockData.videos,
      playingVideo: mockData.videos[1].id
    }, {
      type: REMOVE_VIDEO,
      payload: 123
    })).toMatchSnapshot()
  })

  it('should handle EDIT_VIDEO', () => {
    expect(rootReducer({
      ...initialState,
      videos: mockData.videos
    }, {
      type: EDIT_VIDEO,
      payload: mockData.video
    })).toMatchSnapshot()

    expect(rootReducer({
      ...initialState,
      videos: mockData.videos
    }, {
      type: EDIT_VIDEO,
      payload: {
        id: 123,
        youtubeId: '',
        volume: null,
        range: [null, null]
      }
    })).toMatchSnapshot()
  })

  it('should handle UPDATE_VIDEOS', () => {
    expect(rootReducer({
      ...initialState
    }, {
      type: UPDATE_VIDEOS,
      payload: mockData.videos
    })).toMatchSnapshot()

    expect(rootReducer({
      ...initialState,
      videos: mockData.videos
    }, {
      type: UPDATE_VIDEOS,
      payload: []
    })).toMatchSnapshot()
  })

  it('should handle PLAY_VIDEO', () => {
    expect(rootReducer({
      ...initialState,
      videos: mockData.videos
    }, {
      type: PLAY_VIDEO,
      payload: mockData.videos[2].id
    })).toMatchSnapshot()
  })

  it('should handle PLAY_FIRST_VIDEO', () => {
    expect(rootReducer({
      ...initialState,
      videos: mockData.videos
    }, {
      type: PLAY_FIRST_VIDEO
    })).toMatchSnapshot()
  })

  it('should handle PLAY_PREVIOUS_VIDEO', () => {
    expect(rootReducer({
      videos: mockData.videos,
      playingVideo: mockData.videos[2].id
    }, {
      type: PLAY_PREVIOUS_VIDEO
    })).toMatchSnapshot()

    expect(rootReducer({
      videos: mockData.videos,
      playingVideo: mockData.videos[0].id
    }, {
      type: PLAY_PREVIOUS_VIDEO
    })).toMatchSnapshot()
  })

  it('should handle PLAY_NEXT_VIDEO', () => {
    expect(rootReducer({
      videos: mockData.videos,
      playingVideo: mockData.videos[2].id
    }, {
      type: PLAY_NEXT_VIDEO
    })).toMatchSnapshot()

    expect(rootReducer({
      videos: mockData.videos,
      playingVideo: mockData.videos[mockData.videos.length - 1].id
    }, {
      type: PLAY_NEXT_VIDEO
    })).toMatchSnapshot()
  })
})