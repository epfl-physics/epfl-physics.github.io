import './Header.css';
import Nav from '../Nav/Nav';
import logo from './Logo_EPFL.png';

export default function Header() {
  return (
    <div className='header'>
      <img id='header-logo' src={logo} alt='logo'></img>
      <Nav />
      {/* <p id='language-toggle'>EN / FR</p> */}
      <select name='language-select' id='language-select'>
        <option class='language-option' value='option 1'>
          EN
        </option>{' '}
        {/* <option value='option 2'>FR</option> */}
      </select>
    </div>
  );
}
