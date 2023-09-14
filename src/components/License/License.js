import './License.css';

export default function License() {
  return (
    <div className='container license-content'>
      <p>
        All of the apps created for this project are Open Educational Resources
        (OER) and are licensed under a
      </p>
      <p>
        <a rel='license' href='http://creativecommons.org/licenses/by-nc/4.0/'>
          Creative Commons Attribution-NonCommercial 4.0 International License
        </a>
        .
      </p>
      <div>
        <a rel='license' href='http://creativecommons.org/licenses/by-nc/4.0/'>
          <img
            alt='Creative Commons License'
            src='https://i.creativecommons.org/l/by-nc/4.0/88x31.png'
          />
        </a>
      </div>
      <br />
      <p>The code itself carries a Non-Commercial Software License.</p>
    </div>
  );
}
