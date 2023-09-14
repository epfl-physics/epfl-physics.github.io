import './About.css';

export default function About() {
  return (
    <div id='about' className='container about-content'>
      <p>
        These apps are being developed by
        <ul>
          <li>
            <b>Dr Austin Peel</b>&emsp;&emsp;&emsp;&ensp;
            <i>development, concept, design</i>
          </li>
          <li>
            <b>Dr Sylvain Bréchet</b>&emsp; <i>concept, design</i>
          </li>
        </ul>
        to accompany the introductory physics (mechanics) courses at EPFL.
      </p>
      <br />
      <p>
        If you find them useful, please consider sharing these apps with your
        fellow teachers and students.
      </p>
      <br />
      <p>
        Special thanks to <span>Dr Frédéric Blanc</span> for his ongoing support
        of the project and his help in defining the initial list of apps. We
        thank as well <span>Quentin Gallien</span> and{' '}
        <span>Mathieu Reibel</span> for their help in designing the second
        activity for the Drone Kinematics app.
      </p>
      <br />
      <p>
        We gratefully acknowledge support from EPFL's vice presidency for
        education and the Digital Resources for Instruction and Learning (
        <a href='https://www.epfl.ch/education/educational-initiatives/cede/digitaltools/dril/'>
          DRIL
        </a>
        ) fund.
      </p>
    </div>
  );
}
