import React, { FunctionComponent, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { State } from '../../store/types'
import Button from '../Button/Button'
import { addVideoByYouTubeId, stopVideo, playNextVideo, playPreviousVideo, playFirstVideo } from '../../store/actions'
import { Dispatch } from 'redux'

const mapStateToProps = (state: State) => ({
  videos: state.videos,
  playingVideo: state.playingVideo
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddButtonClick: (input: string) => {
    dispatch(addVideoByYouTubeId(input))
  },
  onPlayButtonClick: () => {
    dispatch(playFirstVideo())
  },
  onStopButtonClick: () => {
    dispatch(stopVideo())
  },
  onNextButtonClick: () => {
    dispatch(playNextVideo())
  },
  onPreviousButtonClick: () => {
    dispatch(playPreviousVideo())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type HeaderProps = PropsFromRedux

export const Header: FunctionComponent<HeaderProps> = ({ videos, playingVideo, onAddButtonClick, onPlayButtonClick, onStopButtonClick, onPreviousButtonClick, onNextButtonClick }) => {
  const [input, setInput] = useState('')

  const videosCount = videos.length
  const isPlaying = playingVideo !== null
  const canPlayPrevNext = isPlaying && videosCount > 1

  return (
    <div>
      <header className="header">
        <div className="container">
          <a href="/" className="header__logo">YouTube Loop</a>

          {videosCount > 0 &&
            <div className="header__controls">
              {isPlaying?
                <Button onClick={onStopButtonClick}>Stop</Button>
                :
                <Button onClick={onPlayButtonClick}>Play</Button>
              }

              {canPlayPrevNext &&
                <>
                  <Button onClick={onPreviousButtonClick}>Previous</Button>
                  <Button onClick={onNextButtonClick}>Next</Button>
                </>
              }
            </div>
          }

          <div className="header__input-group">
            <input type="text" className="header__input"
              placeholder="Enter YouTube URL or Video ID"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
            <div className="header__input-group-append">
              <Button color="blue" onClick={() => onAddButtonClick(input)}>Go Loop!</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default connector(Header)
