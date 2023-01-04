import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListEpisode from './Screens/ListEpisode'
import Nav from './Screens/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>


        
        <Routes>
          <Route path='/episode' element={<ListEpisode/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
