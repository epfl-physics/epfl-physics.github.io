import UnityApp from 'components/UnityApp/UnityApp';
import './Main.css';
import image1 from './img-load-coupled-oscillations.png';
import image2 from './img-load-rotating-cannon.png';

const app1data = {
  index: 1,
  name: 'Coupled Oscillations',
  loaderUrl: 'CoupledOscillations/Build/CoupledOscillations.loader.js',
  dataUrl: 'CoupledOscillations/Build/CoupledOscillations.data',
  frameworkUrl: 'CoupledOscillations/Build/CoupledOscillations.framework.js',
  codeUrl: 'CoupledOscillations/Build/CoupledOscillations.wasm',
  description: '[Coupled oscillations description]',
  image: image1,
  github: 'https://github.com/epfl-physics/coupled-oscillations.git',
};

const app2data = {
  index: 2,
  name: 'Rotating Cannon',
  loaderUrl: 'RotatingCannon/Build/RotatingCannon.loader.js',
  dataUrl: 'RotatingCannon/Build/RotatingCannon.data',
  frameworkUrl: 'RotatingCannon/Build/RotatingCannon.framework.js',
  codeUrl: 'RotatingCannon/Build/RotatingCannon.wasm',
  description: '[Rotating cannon description]',
  image: image2,
  github: 'https://github.com/epfl-physics/rotating-gun.git',
};

export default function Main() {
  return (
    <main className='main-content'>
      <p>Click the play button to load the app.</p>
      <UnityApp {...app1data} />
      <UnityApp {...app2data} />
    </main>
  );
}
