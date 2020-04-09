import configureMockStore from 'redux-mock-store'
import {
  addVideoByYouTubeId, addVideo, removeVideo,
  editVideo, updateVideos, playVideo,
  playNextVideo, playPreviousVideo, stopVideo
} from '../src/store/actions'
import {
  ADD_VIDEO_BY_YOUTUBE_ID, ADD_VIDEO, REMOVE_VIDEO,
  EDIT_VIDEO, UPDATE_VIDEOS, PLAY_VIDEO,
  PLAY_PREVIOUS_VIDEO, PLAY_NEXT_VIDEO
} from '../src/store/types'
import mockData from './mock-data/video'

const mockStore = configureMockStore()
let store = mockStore({})

describe('actions', () => {
  it('should create ADD_VIDEO_BY_YOUTUBE_ID when adding video by youtube id', () => {
    store = mockStore({})
    store.dispatch(addVideoByYouTubeId(mockData.youtubeId))

    const actions = store.getActions()
    const expectedPayload = {
      type: ADD_VIDEO_BY_YOUTUBE_ID,
      payload: mockData.youtubeId
    }
    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create ADD_VIDEO when adding a video', () => {
    store = mockStore({})
    store.dispatch(addVideo(mockData.video))

    const actions = store.getActions()
    const expectedPayload = {
      type: ADD_VIDEO,
      payload: mockData.video
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create REMOVE_VIDEO when removing a video', () => {
    store = mockStore({})
    store.dispatch(removeVideo(mockData.video.id))

    const actions = store.getActions()
    const expectedPayload = {
      type: REMOVE_VIDEO,
      payload: mockData.video.id
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create EDIT_VIDEO when editing a video', () => {
    store = mockStore({})
    store.dispatch(editVideo(mockData.video))

    const actions = store.getActions()
    const expectedPayload = {
      type: EDIT_VIDEO,
      payload: mockData.video
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create UPDATE_VIDEOS when updating videos', () => {
    store = mockStore({})
    store.dispatch(updateVideos(mockData.videos))

    const actions = store.getActions()
    const expectedPayload = {
      type: UPDATE_VIDEOS,
      payload: mockData.videos
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create PLAY_VIDEO when playing a video', () => {
    store = mockStore({})
    store.dispatch(playVideo(mockData.playingVideo))

    const actions = store.getActions()
    const expectedPayload = {
      type: PLAY_VIDEO,
      payload: mockData.playingVideo
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create PLAY_VIDEO when stopping a video', () => {
    store = mockStore({})
    store.dispatch(stopVideo())

    const actions = store.getActions()
    const expectedPayload = {
      type: PLAY_VIDEO,
      payload: null
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create PLAY_NEXT_VIDEO when playing previous video', () => {
    store = mockStore({})
    store.dispatch(playPreviousVideo())

    const actions = store.getActions()
    const expectedPayload = {
      type: PLAY_PREVIOUS_VIDEO
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })

  it('should create PLAY_NEXT_VIDEO when playing next video', () => {
    store = mockStore({})
    store.dispatch(playNextVideo())

    const actions = store.getActions()
    const expectedPayload = {
      type: PLAY_NEXT_VIDEO
    }

    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })
})
