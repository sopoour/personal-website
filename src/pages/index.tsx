import { NextPage } from 'next';
import Projects from '@app/components/sections/Projects';
import About from '@app/components/sections/About';
import Experience from '@app/components/sections/Experience';
import Skills from '@app/components/sections/Skills';

const Home: NextPage = () => (
  <>
    <Projects />
    <Experience />
    <Skills />
    <About />
  </>
);

export default Home;
