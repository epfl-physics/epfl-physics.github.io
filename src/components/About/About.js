import './About.css';

export default function About() {
  return (
    <div className='about-container'>
      <p>
        These apps are being developed by <b>Austin Peel</b> (
        <i>development, concept, design</i>) and <b>Sylvain Bréchet</b> (
        <i>concept, design</i>) to accompany the introductory physics
        (mechanics) courses at EPFL.{' '}
      </p>
      <p>
        Special thanks to <b>Frédéric Blanc</b> for his ongoing support of the
        project and his help defining the initial list of apps. We thank as well{' '}
        <b>Quentin Gallien</b> and <b>Mathieu Reibel</b> for their help in
        designing and implementing certain app activities.
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
