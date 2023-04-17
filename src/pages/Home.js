import Hero from 'components/Hero/Hero';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import Overview from 'components/Overview/Overview';
import Simulations from 'components/Simulations/Simulations';
import About from 'components/About/About';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <SectionHeader title='Overview' />
      <Overview />
      <SectionHeader title='Our Simulations' />
      <Simulations />
      <SectionHeader title='About' />
      <About />
    </Fragment>
  );
}
