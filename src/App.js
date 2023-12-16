import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id' exact element={<VideoDetail/>} />
          <Route path='/channel/:id' exact element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App