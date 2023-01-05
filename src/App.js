import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListEpisode from './Screens/ListEpisode'
import EpisodeDetail from './Screens/EpisodeDetail'
import Nav from './Screens/Nav'

function App() {
  return (
    <div className="bg-[#0F172A]">
      <BrowserRouter>
        <Nav/>
     
        <Routes>
          <Route path='/episode' element={<ListEpisode/>}></Route>
          <Route path='/episodeDetail/:id' element={<EpisodeDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
