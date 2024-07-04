


import React from 'react'
import Heading from '../components/heading/heading';
import MeCard from '../components/cards/me';
import ResumeCard from '../components/cards/resume';
import ExperienceCard from '../components/cards/experience';
import EducationCard from '../components/cards/education';
import StackCard from '../components/cards/stack';

export default function AboutSection() {
  return (
    <div id="about" className="pt-24 px-3 lg:px-8 ">
      <Heading number="01" title_1="About" title_2="Me" />
      <div className="space-y-4 py-[2px]">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-2"></div>
        <div className=" flex flex-col items-center gap-y-4 lg:px-96">
          <ResumeCard />
          <StackCard />
          <ExperienceCard />
          <EducationCard />
        </div>
      </div>
    </div>
  );
}
