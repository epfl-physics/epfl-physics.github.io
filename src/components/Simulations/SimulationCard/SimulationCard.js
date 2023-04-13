import './SimulationCard.css';
import { HashLink } from 'react-router-hash-link';

export default function SimulationCard(props) {
  const hash = `/apps#${props.index === 1 ? '' : props.id}`;

  return (
    <HashLink className='simulation-card-container' to={hash}>
      <img src={props.image} alt='sim' />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </HashLink>
  );
}
