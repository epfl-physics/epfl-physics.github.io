import './Overview.css';
import ModuleCard from './ModuleCard/ModuleCard';
import HelpOutline from '@mui/icons-material/HelpOutline';
import AutoStoriesOutlined from '@mui/icons-material/AutoStoriesOutlined';
import ExploreOutlined from '@mui/icons-material/ExploreOutlined';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined';

const intro = {
  icon: <HelpOutline fontSize='large' />,
  title: 'Introduction',
  description:
    'A short, high-level presentation of the topic focussing on the big picture. ' +
    'No math here, just a step-by-step description of what physics ideas are ' +
    'explained and visualised with the app.',
};

const theory = {
  icon: <AutoStoriesOutlined fontSize='large' />,
  title: 'Theory',
  description:
    'A visualisation of the relevant mathematics that governs the ' +
    'physical system. Equations which have been derived during lecture have ' +
    'color-coded variables to match their physical and/or mathematical counterparts.',
};

const activities = {
  icon: <ExploreOutlined fontSize='large' />,
  title: 'Activities',
  description:
    'Goal-oriented tasks aimed at testing knowledge and developing a deeper ' +
    'understanding of the topic. The user is challenged to reflect on their ' +
    'comprehension in order to solve a problem themselves.',
};

const sandbox = {
  icon: <PlayCircleOutlined fontSize='large' />,
  title: 'Sandbox',
  description:
    'The simulation is fully unlocked so that the user can test hypotheses ' +
    'and run their own experiments by setting parameters freely.',
};

export default function Overview() {
  return (
    <div className='container overview-section'>
      <p>
        Each app is presented with four modules: introduction, theory,
        activities, and sandbox. Many different use cases are possible,
        depending on the needs of the teacher and their students. For example, a
        teacher can use the theory module of an app to manipulate dynamically
        drawn graphs, vectors, and other mathematical quantities during their
        lecture. Students who want to refresh the basics or to deepen their
        conceptual understanding of a topic at their own pace will find the
        introduction and activities modules useful. The sandbox is where you can
        choose different combinations of parameters to run virtual experiments
        yourself.
      </p>
      <div className='overview-module-cards'>
        <ModuleCard {...intro} />
        <ModuleCard {...theory} />
        <ModuleCard {...activities} />
        <ModuleCard {...sandbox} />
      </div>
    </div>
  );
}
