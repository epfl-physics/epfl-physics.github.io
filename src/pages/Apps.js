import UnityApp from 'components/UnityApp/UnityApp';
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './Apps.css';
import image1 from 'images/img-load-flying-drone.png';
import image2 from 'images/img-load-rotating-cannon.png';
import image3 from 'images/img-load-coupled-oscillations.png';

const app1data = {
  index: 1,
  id: 'flying-drone',
  name: 'Flying Drone',
  loaderUrl: 'FlyingDrone/Build/FlyingDrone.loader.js',
  dataUrl: 'FlyingDrone/Build/FlyingDrone.data',
  frameworkUrl: 'FlyingDrone/Build/FlyingDrone.framework.js',
  codeUrl: 'FlyingDrone/Build/FlyingDrone.wasm',
  description: '[Flying drone description]',
  image: image1,
  github: 'https://github.com/epfl-physics/flying-drone.git',
};

const app2data = {
  index: 2,
  id: 'rotating-cannon',
  name: 'Rotating Cannon',
  loaderUrl: 'RotatingCannon/Build/RotatingCannon.loader.js',
  dataUrl: 'RotatingCannon/Build/RotatingCannon.data',
  frameworkUrl: 'RotatingCannon/Build/RotatingCannon.framework.js',
  codeUrl: 'RotatingCannon/Build/RotatingCannon.wasm',
  description: '[Rotating cannon description]',
  image: image2,
  github: 'https://github.com/epfl-physics/rotating-gun.git',
};

const app3data = {
  index: 3,
  id: 'coupled-oscillations',
  name: 'Coupled Oscillations',
  loaderUrl: 'CoupledOscillations/Build/CoupledOscillations.loader.js',
  dataUrl: 'CoupledOscillations/Build/CoupledOscillations.data',
  frameworkUrl: 'CoupledOscillations/Build/CoupledOscillations.framework.js',
  codeUrl: 'CoupledOscillations/Build/CoupledOscillations.wasm',
  description: '[Coupled oscillations description]',
  image: image3,
  github: 'https://github.com/epfl-physics/coupled-oscillations.git',
};

export default function Apps() {
  return (
    <div className='apps-main-content'>
      <p>
        <Link className='apps-main-content-link' to='/'>
          <ArrowBack fontSize='small' /> Back
        </Link>
      </p>
      <UnityApp {...app1data} />
      <UnityApp {...app2data} />
      <UnityApp {...app3data} />
    </div>
  );
}
