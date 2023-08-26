import React, { useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import './UnityApp.css';

function UnityApp(props) {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: props.loaderUrl,
    dataUrl: props.dataUrl,
    frameworkUrl: props.frameworkUrl,
    codeUrl: props.codeUrl,
  });

  const [showUnity, setShowUnity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loadingPercentage = Math.round(loadingProgression * 100);

  function handleClick() {
    setIsLoading(true);
    setShowUnity(true);
  }

  return (
    <div id={`${props.id}`} className='unity-app'>
      <div className='unity-app-title'>
        <h3>{props.name}</h3>
        {props.github ? (
          <a href={props.github}>
            <FontAwesomeIcon icon={faGithub} color='black' size='lg' />
          </a>
        ) : (
          <p></p>
        )}
      </div>
      <div className='unity-player'>
        {isLoading && !isLoaded && (
          <div className='loading-overlay'>
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        {showUnity ? (
          <Unity unityProvider={unityProvider} className='unity' />
        ) : (
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faCirclePlay} size='2x' />
          </button>
        )}
      </div>
      <p className='unity-app-description'>{props.description}</p>
    </div>
  );
}

export default UnityApp;
