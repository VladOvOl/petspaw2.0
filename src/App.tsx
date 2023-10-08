import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/home_page/HomePage';
import VotingPage from './pages/voting_page/VotingPage';
import Navbar from './components/big_components/navbar/Navbar';
import GalleryPage from './pages/gallery_page/GalleryPage';
import BreedsPage from './pages/breeds_page/BreedsPage';
import LikePage from './pages/like_page/LikePage';
import DislikePage from './pages/dislike_page/DislikePage';

function App() {
  return (

    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/page/*' element={<Navbar/>}>
              <Route path='gallery' element={<GalleryPage/>}/>
              <Route path='voting' element={<VotingPage/>}/>
              <Route path='breeds' element={<BreedsPage/>}/>
              <Route path='likes' element={<LikePage/>}/>
              <Route path='dislikes' element={<DislikePage/>}/>
              
            </Route>
        </Route>
    </Routes>
  );
}

export default App;
