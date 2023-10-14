import './AlertBadge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function AlertBadge({ text }) {
  return (
    <div className='alert-badge'>
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        size='1x'
        style={{ marginRight: '0.4rem' }}
      />
      <p>{text}</p>
    </div>
  );
}
