import './App.css';
import Alert from './components/Alert/Alert';
import Home from './pages/Home';
import Apps from './pages/Apps';
import PageNotFound from './pages/PageNotFound';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <HashRouter basename='/'>
        <Alert />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/apps' element={<Apps />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
