import React, { FC } from 'react'
import Card from '../ui/card'

import { FiArrowUpRight } from 'react-icons/fi';
import { title } from 'process';
import { Timeline, TimelineItem } from '../ui/timeline';

export default function ExperienceCard() {
  return (
    <Card key={2} title='My Experience'>
        <Timeline>
           {experiencesData.map((ex,i)=>(
            <TimelineItem
               key={i}
               date={ex.date}
               title={ex.title}
               subTitle={ex.subTitle}
               link={ex.link}
              //  tag={ex.tag}
            />
           ))}
        </Timeline>
    </Card>
  );
}

const experiencesData = [
  {
    date: "2025 - Now",
    title: "Engineer II",
    subTitle: "Textron Aviation",
    link: "https://www.textron.com/about/our-businesses/textron-aviation",
    // tag:"Remote",
  },
  {
    date: "2023 - 2025",
    title: "Engineer I",
    subTitle: "Textron Aviation",
    link: "https://www.textron.com/about/our-businesses/textron-aviation",
    // tag:"Remote",
  },
  {
    date: "2022 - 2023",
    title: "Student Intern",
    subTitle: "Textron",
    link: "https://www.textron.com/",
    // tag:"Remote",
  },
];
