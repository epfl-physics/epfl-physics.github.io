import './SimulationCard.css';
import { HashLink } from 'react-router-hash-link';

export default function SimulationCard(props) {
  const hash = `/apps#${props.index === 1 ? '' : props.id}`;

  return (
    <>
      {props.index > 0 ? (
        <HashLink className='simulation-card-hashlink' to={hash}>
          <div className='simulation-card-container'>
            <img src={props.image} alt='sim' />
            <h4>{props.name}</h4>
            <p className='keywords'>{props.keywords}</p>
            <p>{props.description}</p>
          </div>
        </HashLink>
      ) : (
        <div className='simulation-card-container'>
          <h4>{props.name}</h4>
          <img src={props.image} alt='icon' className='check-back-icon' />
        </div>
      )}
    </>
  );
}
