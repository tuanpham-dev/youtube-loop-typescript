import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import TestRenderer from 'react-test-renderer'
import Header from '../src/components/Header/Header'
import mockData from './mock-data/video'
import { addVideoByYouTubeId, playFirstVideo, stopVideo, playPreviousVideo, playNextVideo } from '../src/store/actions'

const mockStore = configureMockStore()
const initialState = {
  videos: [],
  playingVideo: null
}

describe('Header', () => {
  describe('Renderer', () => {
    it('should render with no control button', () => {
      const store = mockStore(initialState)
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      expect(header.toJSON()).toMatchSnapshot()
    })

    it('should render with play button', () => {
      const store = mockStore({
        ...initialState,
        videos: mockData.videos
      })
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      expect(header.toJSON()).toMatchSnapshot()
    })

    it('should render with stop button', () => {
      const store = mockStore({
        videos: [mockData.video],
        playingVideo: mockData.video.id
      })
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      expect(header.toJSON()).toMatchSnapshot()
    })

    it('should render with stop, previous and next buttons', () => {
      const store = mockStore({
        videos: mockData.videos,
        playingVideo: mockData.videos[2].id
      })
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      expect(header.toJSON()).toMatchSnapshot()
    })
  })

  describe('Actions', () => {
    it('should dispatch addVideoByYouTubeId on Go Loop! button click', () => {
      const store = mockStore(initialState)
      store.dispatch = jest.fn();
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )

      const buttons = header.root.findAllByType('button')
      expect(buttons[0].children).toEqual(['Go Loop!'])

      TestRenderer.act(() => {
        header.root.findByType('input').props.onChange({ target: { value: mockData.youtubeId }})
      })

      TestRenderer.act(() => {
        header.root.findByType('button').props.onClick()
      })

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        addVideoByYouTubeId(mockData.youtubeId)
      )
    })

    it('should dispatch playFirstVideo on Play button click', () => {
      const store = mockStore({
        ...initialState,
        videos: mockData.videos
      })
      store.dispatch = jest.fn();
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )

      const buttons = header.root.findAllByType('button')
      expect(buttons[0].children).toEqual(['Play'])

      TestRenderer.act(() => {
        header.root.findAllByType('button')[0].props.onClick()
      })

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        playFirstVideo()
      )
    })

    it('should dispatch stopVideo on Stop button click', () => {
      const store = mockStore({
        videos: mockData.videos,
        playingVideo: mockData.videos[2].id
      })
      store.dispatch = jest.fn();
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )

      const buttons = header.root.findAllByType('button')
      expect(buttons[0].children).toEqual(['Stop'])

      TestRenderer.act(() => {
        header.root.findAllByType('button')[0].props.onClick()
      })

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        stopVideo()
      )
    })

    it('should dispatch playPreviousVideo on Previous button click', () => {
      const store = mockStore({
        videos: mockData.videos,
        playingVideo: mockData.videos[2].id
      })
      store.dispatch = jest.fn();
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )

      const buttons = header.root.findAllByType('button')
      expect(buttons[1].children).toEqual(['Previous'])

      TestRenderer.act(() => {
        header.root.findAllByType('button')[1].props.onClick()
      })

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        playPreviousVideo()
      )
    })

    it('should dispatch playNextVideo on Next button click', () => {
      const store = mockStore({
        videos: mockData.videos,
        playingVideo: mockData.videos[2].id
      })
      store.dispatch = jest.fn();
      const header = TestRenderer.create(
        <Provider store={store}>
          <Header />
        </Provider>
      )

      const buttons = header.root.findAllByType('button')
      expect(buttons[2].children).toEqual(['Next'])

      TestRenderer.act(() => {
        header.root.findAllByType('button')[2].props.onClick()
      })

      expect(store.dispatch).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledWith(
        playNextVideo()
      )
    })
  })
})