import './Simulations.css';
import SimulationCard from './SimulationCard/SimulationCard';
import thumbnail4 from 'images/thumbnail_spinning_top.png';
import thumbnail3 from 'images/thumbnail_coupled_oscillations.png';
import thumbnail2 from 'images/thumbnail_rotating_cannon.png';
import thumbnail1 from 'images/thumbnail_drone_kinematics.png';
// import checkBackIcon from 'images/checkbacksoon_icon.png';

const sim1 = {
  index: 1,
  id: 'drone-kinematics',
  image: thumbnail1,
  name: 'Drone Kinematics',
  keywords: 'Kinematics in inertial and accelerated frames of reference',
  description:
    'Understand how positions, velocities, and accelerations transform between inertial and accelerated frames of reference.',
};

const sim2 = {
  index: 2,
  id: 'rotating-cannon',
  image: thumbnail2,
  name: 'Rotating Cannon',
  keywords: 'Dynamics in a uniformly rotating reference frame',
  description:
    'See how so-called fictitious forces arise in rotating reference frames and in which directions they act.',
};

const sim3 = {
  index: 3,
  id: 'coupled-oscillations',
  image: thumbnail3,
  name: 'Coupled Oscillations',
  keywords: "Hooke's law, Newton's third law, eigenmodes",
  description:
    'Explore how the complex behaviour of two spring-coupled oscillators can be understood in terms of simpler patterns of motion.',
};

const sim4 = {
  index: 4,
  id: 'spinning-top',
  image: thumbnail4,
  name: 'Spinning Top',
  keywords: 'Euler angles, precession, nutation, intrinsic rotation',
  description:
    'Visualise the three Euler angles of a rigid body, along with dynamical quantities like angular momentum and torque.',
  underDevelopment: true,
};

// const feedback = {
//   index: 0,
//   id: 'coming-soon',
//   image: checkBackIcon,
//   name: 'Help us improve',
//   description: 'asdf',
// };

export default function Simulations() {
  return (
    <div className='container simulations-content'>
      <SimulationCard {...sim1} />
      <SimulationCard {...sim2} />
      <SimulationCard {...sim3} />
      <SimulationCard {...sim4} />
      {/* <SimulationCard {...feedback} /> */}
    </div>
  );
}
