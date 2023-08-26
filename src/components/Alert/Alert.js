import './Alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function Alert() {
  return (
    <div className='alert'>
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        size='1x'
        style={{ marginRight: '10px' }}
      />
      <p>This webpage is under active development.</p>
    </div>
  );
}
