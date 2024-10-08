
import { useParams } from 'react-router-dom'
import Playvideo from '../../Components/Play-video/Play_video'
import Recommended from '../../Components/Recommended/Recommended'
import './Video.css'

const Video = () => {
  const {videoId,categoryId}=useParams()
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video