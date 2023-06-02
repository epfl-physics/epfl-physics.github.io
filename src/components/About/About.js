import './About.css';

export default function About() {
  return (
    <div className='about-container'>
      <p>
        These apps are being developed by
        <ul>
          <li>
            <b>Austin Peel</b>&emsp;&emsp;&emsp;&ensp;
            <i>development, concept, design</i>
          </li>
          <li>
            <b>Sylvain Bréchet</b>&emsp; <i>concept, design</i>
          </li>
        </ul>
        to accompany the introductory physics (mechanics) courses at EPFL.
      </p>
      <p>
        Special thanks to <span className='emph'>Frédéric Blanc</span> for his
        ongoing support of the project and his help defining the initial list of
        apps. We thank as well <span className='emph'>Quentin Gallien</span> and{' '}
        <span className='emph'>Mathieu Reibel</span> for their help in designing
        and implementing certain app activities.
      </p>
      <p>
        All of the apps created for this project are Open Educational Resources
        (OER) and carry a Creative Commons Attribution 4.0 license (CC BY 4.0).
        The software itself is open source and carries a [... GPL?] license. If
        you find them useful, please consider sharing these apps with your
        fellow teachers and students.
      </p>
      <p>
        <b>
          We gratefully acknowledge support from EPFL's vice presidency for
          education and the Digital Resources for Instruction and Learning (
          <a href='https://www.epfl.ch/education/educational-initiatives/cede/digitaltools/dril/'>
            DRIL
          </a>
          ) fund.
        </b>
      </p>
    </div>
  );
}
