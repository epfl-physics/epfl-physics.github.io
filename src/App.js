import './App.css';
import Alert from './components/Alert/Alert';
import Home from './pages/Home';
import Apps from './pages/Apps';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter basename='/'>
        <Alert />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/apps' element={<Apps />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
