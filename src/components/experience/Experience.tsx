import React from 'react'

import { BiSolidBriefcase } from 'react-icons/bi';
import { FaFlagCheckered } from 'react-icons/fa';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useContentContex } from '@/context/Content';

import css from './styles/experience.module.scss'

export const Experience = () => {
  const { experience } = useContentContex();
  return (
    <div className={css.contenedor}>
      <h1>{experience.title}</h1>
      <VerticalTimeline layout='1-column-left' lineColor='#000'>
        {
          experience.jobs.map((job, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={job.period}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<BiSolidBriefcase size={15} />}
              key={job.company + index}
            >
              <h3 className="vertical-timeline-element-title">{job.company}</h3>
              <h4 className="vertical-timeline-element-subtitle">{job.position}</h4>
              {
                job?.description && (
                  <p>{job.description}</p>
                )
              }
            </VerticalTimelineElement>
          ))
        }
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaFlagCheckered size={18} />}
        />
      </VerticalTimeline>
    </div>
  )
}
