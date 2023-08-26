import './Header.css';
import logo from 'images/logo_EPFL.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <header className='container header'>
      <img src={logo} alt='Logo' className='header-logo' />
      <nav>
        <Link to='/'>Home</Link>
        <HashLink smooth to='/#about'>
          About
        </HashLink>
        <Link to='/simulations'>Simulations</Link>
      </nav>
    </header>
  );
}
