import './Hero.css';
import epflLogo from '../../images/EPFL_logo.png';
import heroImage from '../../images/header_image.png';

export default function Hero() {
  return (
    <div className='hero-section'>
      <div className='hero-text-container'>
        <img src={epflLogo} alt='epfl_logo' className='hero-logo' />
        <h1>Physics Simulations</h1>
        <p>
          This website contains interactive applications for learning,
          visualising, and experimenting with physics concepts in EPFL's
          first-year mechanics courses.
        </p>
      </div>
      <img src={heroImage} alt='hero_image' className='hero-image' />
    </div>
  );
}
