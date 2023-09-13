import { Fragment } from 'react';
import './SimulationCard.css';
import { HashLink } from 'react-router-hash-link';

export default function SimulationCard(props) {
  const hash = `/simulations#${props.index === 1 ? '' : props.id}`;

  return (
    <Fragment>
      {props.index > 0 ? (
        <HashLink
          className={`simulation-card ${props.image ? '' : 'no-link'}`}
          to={hash}
        >
          {props.image ? <img src={props.image} alt='Sim' /> : <></>}
          <div className='simulation-card-content'>
            <h3>{props.name}</h3>
            <p className='description italic'>{props.keywords}</p>
            <br />
            <p>{props.description}</p>
          </div>
        </HashLink>
      ) : (
        <div className='simulation-card no-link'>
          <h3 className='no-link-h3'>{props.name}</h3>
          <img src={props.image} alt='Icon' className='check-back-icon' />
        </div>
      )}
    </Fragment>
  );
}
