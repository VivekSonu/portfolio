import React, { FC } from 'react'
import Card from '../ui/card'
import { Timeline, TimelineItem } from '../ui/timeline'
import { FiArrowUpRight } from 'react-icons/fi';
import { title } from 'process';

export default function EducationCard() {
  return (
    <Card key={1} title='My Education'>
        <Timeline>
           {EducationsData.map((ex,i)=>(
            <TimelineItem
               key={i}
               date={ex.date}
               title={ex.title}
               subTitle={ex.subTitle}
            />
           ))}
        </Timeline>
    </Card>
  );
}

const EducationsData=[
    {
        date:"2021 - 2023",
        title:"Postgraduation",
        subTitle:"Vellore Institute of Technology,Vellore"
    },
    {
        date:"2017 - 2020",
        title:"Undergraduation",
        subTitle:"Karim City College,Jamshedpur"
    },
    {
        date:"2015 - 2017",
        title:"Matriculation + Intermediate",
        subTitle:"Kendriye Vidyalaya No.2,Pathankot"
    },
];
