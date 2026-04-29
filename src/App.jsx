import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Agents from '@/pages/Agents';
import SelectedAgent from '@/pages/SelectedAgent';
import NotFound from '@/pages/NotFound';
import Navbar from './components/Navbar';


function App() {

  return (
    <BrowserRouter>
      <Navbar title="Agentes de Valorant" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Agents />} />
        <Route path='/items/:id' element={<SelectedAgent />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
