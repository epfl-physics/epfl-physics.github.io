import './Hero.css';
import { useRef } from 'react';
import heroVideo from 'videos/rotating_cannon_en.mp4';

export default function Hero() {
  const ref = useRef(null);

  const loop = () => {
    ref.current.play();
  };

  return (
    <div className='container hero-section'>
      <div className='hero-content'>
        <h1 className='hero-tagline'>
          Interactive Educational Physics Simulations
        </h1>
        <p>
          This website contains interactive applications for learning,
          visualising, and experimenting with physics concepts in EPFL's
          first-year mechanics courses.
        </p>
      </div>
      <div className='hero-video'>
        <video
          id='video'
          ref={ref}
          autoPlay
          muted={true}
          src={heroVideo}
          onEnded={loop}
        ></video>
      </div>
    </div>
  );
}
