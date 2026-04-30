import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Agents from '@/pages/Agents';
import SelectedAgent from '@/pages/SelectedAgent';
import NotFound from '@/pages/NotFound';
import Favorites from '@/pages/Favorites';
import { FavoritesProvider } from '@/context/FavoritesContext';
import Navbar from './components/Navbar';


function App() {

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar title="Agentes de Valorant" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Agents />} />
          <Route path='/items/:id' element={<SelectedAgent />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
