import React from 'react'
import './topicmainprogress.style.scss'
import ProgressSidebar from './ProgressSidebar/ProgressSidebar.component'
import TopicProgress from './TopicProgress/TopicProgress.component'
import data from '../../data-api/data.json'

interface chapterprops{
    chapter: {
        annotation: string;
        name: string;
        points_to_earn: number;
        id: string;
        topics: {
            annotation: string;
            name: string;
            points_to_earn: number;
            id: string;
        }[];
    }[]
}
const TopicMainProgress: React.FunctionComponent<chapterprops>  = (props):JSX.Element => {
  return (
    <div className='main-cont-topicmain'>
        <ProgressSidebar  />
        
        <TopicProgress chapter={props.chapter} />
    </div>
  )
}

export default TopicMainProgress

// state={props.chapter}