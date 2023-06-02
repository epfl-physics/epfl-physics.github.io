import './Simulations.css';
import SimulationCard from './SimulationCard/SimulationCard';
import thumbnail1 from 'images/thumbnail_coupled_oscillations.png';
import thumbnail2 from 'images/thumbnail_rotating_cannon.png';
import thumbnail3 from 'images/thumbnail_flying_drone.png';
// import checkBackIcon from 'images/checkbacksoon_icon.png';

const sim1 = {
  index: 1,
  id: 'coupled-oscillations',
  image: thumbnail1,
  name: 'Coupled Oscillations',
  keywords: "Hooke's law, normal modes",
  description:
    'Explore how the complex behaviour of two spring-coupled oscillators can be understood in terms of simpler component patterns of motion.',
};

const sim2 = {
  index: 2,
  id: 'rotating-cannon',
  image: thumbnail2,
  name: 'Rotating Cannon',
  keywords: 'Centrifugal force, Coriolis force',
  description:
    'See how so-called fictitious forces arise in rotating reference frames and in which directions they act.',
};

const sim3 = {
  index: 3,
  id: 'flying-drone',
  image: thumbnail3,
  name: 'Flying Drone',
  keywords: 'Accelerated reference frame kinematics',
  description:
    'Understand how positions, velocities, and accelerations transform between inertial and non-inertial (accelerated) reference frames.',
};

// const checkBackSoon = {
//   index: 0,
//   id: 'coming-soon',
//   image: checkBackIcon,
//   name: 'More simulations are in developement. Please check back soon.',
// };

export default function Simulations() {
  return (
    <div className='simulations-container'>
      <SimulationCard {...sim1} />
      <SimulationCard {...sim2} />
      <SimulationCard {...sim3} />
      {/* <SimulationCard {...checkBackSoon} /> */}
    </div>
  );
}
