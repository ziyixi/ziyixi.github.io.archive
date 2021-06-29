import { recordings, topics } from '../data/talks'

import VideoStack from '../components/VideoStack'

const Talks = () => <VideoStack topics={topics} recordings={recordings} />

export default Talks
