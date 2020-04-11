import React, { FunctionComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { State, Video as TypeVideo } from '../../store/types'
import { Dispatch } from 'redux'
import { updateVideos } from '../../store/actions'
import { ReactSortable } from 'react-sortablejs'
import './VideoList.scss'
import Video from './Video'

const mapStateToProps = (state: State) => ({
  videos: state.videos
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateVideos: (videos: TypeVideo[]) => {
    dispatch(updateVideos(videos))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type VideoListProps = PropsFromRedux

export const VideoList: FunctionComponent<VideoListProps> = ({ videos, updateVideos }) => {
  if (!videos.length) {
    return null
  }

  return (
    <div>
      <ReactSortable tag="ul" list={videos} setList={updateVideos} handle=".video__move-handle" className="video-list">
        {videos.map(video => (
          <li key={video.id} className="video-item">
            <Video video={video} />
          </li>
        ))}
      </ReactSortable>
    </div>
  )
}

export default connector(VideoList)
