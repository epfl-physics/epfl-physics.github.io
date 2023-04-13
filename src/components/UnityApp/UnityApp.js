import React, { useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import './UnityApp.css';

function UnityApp(props) {
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    // requestFullscreen,
    // addEventListener,
    // removeEventListener,
    // sendMessage,
  } = useUnityContext({
    loaderUrl: props.loaderUrl,
    dataUrl: props.dataUrl,
    frameworkUrl: props.frameworkUrl,
    codeUrl: props.codeUrl,
  });

  const [showUnity, setShowUnity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    setShowUnity(true);
  }

  // const userAgent = window.navigator.userAgent;

  // const isSafari =
  //   navigator.userAgent.indexOf('Safari') !== -1 &&
  //   !navigator.userAgent.match(/Chrome/);

  const loadingPercentage = Math.round(loadingProgression * 100);

  // const [unityIsFullscreen, setUnityIsFullscreen] = useState(false);
  // console.log(unityIsFullscreen);

  // const handleEnterFullscreen = useCallback(() => {
  //   console.log('handleEnterFullscreen()');
  //   requestFullscreen(true);
  //   // setUnityIsFullscreen(true);
  //   // document.getElementById('unity-app').webkitRequestFullscreen();
  // }, [requestFullscreen]);

  // useEffect(() => {
  //   addEventListener('EnterFullscreen', handleEnterFullscreen);
  //   return () => {
  //     removeEventListener('EnterFullscreen', handleEnterFullscreen);
  //   };
  // }, [addEventListener, removeEventListener, handleEnterFullscreen]);

  // const handleExitFullscreen = useCallback(() => {
  //   console.log('handleExitFullscreen()');
  //   requestFullscreen(false);
  //   // setUnityIsFullscreen(false);
  // }, [requestFullscreen]);

  // useEffect(() => {
  //   addEventListener('ExitFullscreen', handleExitFullscreen);
  //   return () => {
  //     removeEventListener('ExitFullscreen', handleExitFullscreen);
  //   };
  // }, [addEventListener, removeEventListener, handleExitFullscreen]);

  // Handle when the Esc button is pressed from fullscreen mode
  // const [isFullscreen, setIsFullscreen] = useState(false);

  // useEffect(() => {
  //   function onFullscreenChange() {
  //     setIsFullscreen(Boolean(document.webkitFullscreenElement));
  //     console.log(isFullscreen + ' , ' + unityIsFullscreen);
  //     if (isFullscreen === unityIsFullscreen) {
  //       // console.log('Sending message to Unity');
  //       sendMessage('Footer', 'HandleExitFullscreenFromBrowser');
  //     } else if (isSafari) {
  //       sendMessage('Footer', 'HandleEnterFullscreenFromBrowser');
  //     }
  //   }
  //   document.addEventListener('fullscreenchange', onFullscreenChange);
  //   return () =>
  //     document.removeEventListener('fullscreenchange', onFullscreenChange);
  // }, [setIsFullscreen, isFullscreen, unityIsFullscreen, sendMessage, isSafari]);

  return (
    <div id={`unity-app-${props.index}`} className='unity-app'>
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
          <div>
            <img src={props.image} alt=''></img>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faCirclePlay} size='4x' />
            </button>
          </div>
        )}
      </div>
      <p className='unity-app-description'>{props.description}</p>
    </div>
  );
}

export default UnityApp;
