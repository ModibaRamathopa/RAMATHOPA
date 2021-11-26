import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
        Welcome To <br/>
        Ramathopa's Portfolio
    </SectionTitle>
    <SectionText>
      <p>
        I have studied BSc in Mathematics and Computer Sciences.
        Going throw your website I have learnt that you use GraphQL and I am more interested to learn about it as I have learnt about AIPs in the University.
        I also wish to learn to become a fullstack software developer
        <br/>
        I am very hard working person, who is eager to new things or technologies and I work well Under pressure  
      </p>
      <br/>
      <p>
         I have always been passionate to be a software developer from my high school years. Going to University of Limpopo was a step closer to achieving my goal of becoming a software developer by gaining more programming skills. I have done my research about SovTech and I believe the culture aligns towards the career of my dreams. I believe this graduate program will enable me to acquire the necessary industry skills.
      </p>
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section> 
);

export default Hero;