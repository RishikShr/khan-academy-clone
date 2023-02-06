import React from 'react'
import HomeCard from '../../component/home-card/home-card.component'
import TopicMainProgress from '../../component/side-section/topicmainprogress.component'
import data from '../../data-api/data.json'
const Homepage: React.FunctionComponent = () => {
    return (
        <>
            <HomeCard class={data.class}
                subject={data.subject}

            />
            
            <TopicMainProgress chapter ={data.chapters} />
        </>
    )
}

export default Homepage