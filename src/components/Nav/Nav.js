import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Nav() {
  return (
    <nav className='nav'>
      <a href='https://github.com/EPFL-Astrophysics-I'>
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </a>
      <a href='https://epfl-astrophysics-i.github.io/home/'>Home</a>
      <a href='https://epfl-astrophysics-i.github.io/chapter1/'>Chapter 1</a>
      <a href='https://epfl-astrophysics-i.github.io/chapter2/'>Chapter 2</a>
      <a href='https://epfl-astrophysics-i.github.io/chapter3/'>Chapter 3</a>
    </nav>
  );
}
