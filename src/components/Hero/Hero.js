import './Hero.css';
import { useRef } from 'react';
import epflLogo from 'images/EPFL_logo.png';
// import heroImage from 'images/header_image.png';
import heroVideo from 'videos/rotating_cannon_en.mp4';

export default function Hero() {
  const ref = useRef(null);

  const loop = () => {
    ref.current.play();
  };

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
      {/* <img src={heroImage} alt='hero_image' className='hero-image' /> */}
      <div className='hero-video'>
        <video
          id='video'
          ref={ref}
          style={{ maxWidth: '720px', height: 'auto' }}
          autoPlay
          muted={true}
          src={heroVideo}
          onEnded={loop}
        ></video>
      </div>
    </div>
  );
}
