import './SimulationCard.css';
import { Link } from 'react-router-dom';

export default function SimulationCard(props) {
  return (
    <Link className='simulation-card-container' to='/apps'>
      <img src={props.image} alt='sim' />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </Link>
  );
}
