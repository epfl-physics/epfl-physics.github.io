import './Simulations.css';
import SimulationCard from './SimulationCard/SimulationCard';
import thumbnail1 from '../../images/coupled_oscillations_thumbnail.png';
import thumbnail2 from '../../images/rotating_cannon_thumbnail.png';

const sim1 = {
  index: 1,
  id: 'coupled-oscillations',
  image: thumbnail1,
  name: 'Coupled Oscillations',
  description:
    '[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam]',
};

const sim2 = {
  index: 2,
  id: 'rotating-cannon',
  image: thumbnail2,
  name: 'Rotating Cannon',
  description:
    '[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam]',
};

export default function Simulations() {
  return (
    <div className='simulations-container'>
      <SimulationCard {...sim1} />
      <SimulationCard {...sim2} />
    </div>
  );
}
