import React, { FunctionComponent } from 'react'
import VideoList from '../Video/VideoList'

export const MainContent: FunctionComponent = () => {
  return (
    <div className="main">
      <div className="container">
        <VideoList />
      </div>
    </div>
  )
}

export default MainContent
