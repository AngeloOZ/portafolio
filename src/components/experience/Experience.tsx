import React from 'react'

import { BiSolidBriefcase, BiSolidStar } from 'react-icons/bi';
import { FaFlagCheckered } from 'react-icons/fa';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useContentContex } from '@/context/Content';

import css from './styles/experience.module.scss'
import { useUIContext } from '@/context';

export const Experience = () => {
  const { experience } = useContentContex();
  const { isDarkMode } = useUIContext();

  return (
    <div className={`${css.contenedor} bg-background`} id='experiencia'>
      <h2 className='text-4xl font-semibold mb-8 text-center'>{experience.title}</h2>
      <VerticalTimeline lineColor='#ABABAB'>
        {
          experience.jobs.map((job, index) => (
            <VerticalTimelineElement
              key={job.company + index}
              className="vertical-timeline-element--work"
              textClassName={css.vertical__content}
              contentStyle={{
                background: isDarkMode ? '#181818' : "#F7f7f7",
                color: isDarkMode ? '#fff' : '#000',
              }}
              date={job.period}
              contentArrowStyle={{ borderRight: `7px solid ${isDarkMode ? '#181818' : "#F7f7f7"}` }}
              icon={<BiSolidBriefcase size={15} />}
              iconClassName={css.vertical__icon}
            >
              <h3 className={css.content__title}>{job.company}</h3>
              <h4 className={css.content__subtitle}>{job.position}</h4>

              {
                job?.description && (
                  <p className={css.content__text}>{job.description}</p>
                )
              }
            </VerticalTimelineElement>
          ))
        }
        <VerticalTimelineElement
          iconClassName={css.vertical__icon}
          icon={<BiSolidStar size={1} />}
          visible={false}
        />
      </VerticalTimeline>
    </div>
  )
}
