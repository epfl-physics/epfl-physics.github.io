import './SimulationCard.css';
import { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
import AlertBadge from 'components/Alert/AlertBadge';

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
          {props.underDevelopment ? (
            <AlertBadge text='Under development' />
          ) : (
            <></>
          )}
          <div className='simulation-card-content'>
            <h3>{props.name}</h3>
            <p className='secondary-color italic'>{props.keywords}</p>
            <br />
            <p className='simulation-card-description'>{props.description}</p>
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
