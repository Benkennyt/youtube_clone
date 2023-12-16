import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoVideoUrl, demoChannelTitle} from '../utils/constants';

const VideoCard = ({video: {id: { videoId}, snippet}}) => {
    console.log(snippet)
  return (
    <Card  sx={{ width: { xs: '358px', sm: '358px', md: "320px", } , boxShadow: 'none', borderRadius:'20px' ,border:'solid 2px #009698'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: { xs: '100%', sm: '358px'}, height: 180}}
            />
        </Link>
        <CardContent sx={{ backgroundColor: 'white', height: 'fit-content'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight={'bold'} color={'black'}>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight={'bold'} color={'grey'}>
                    {snippet?.channelTitle.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    <CheckCircle sx={{ fontSize: 12, color: '#009698', ml: '5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard