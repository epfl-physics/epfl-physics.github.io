import './App.css';
import Alert from './components/Alert/Alert';
import Header from 'components/Header/Header';
import Home from './pages/Home';
import Sims from './pages/Sims';
import PageNotFound from './pages/PageNotFound';
import { HashRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='app-container'>
      <HashRouter basename='/'>
        <Alert />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/simulations' element={<Sims />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
