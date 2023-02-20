import React from 'react'
import HomeCard from '../../component/home-card/home-card.component'
import TopicMainProgress from '../../component/side-section/topicmainprogress.component'
import data from '../../api/data.json'
const Homepage: React.FunctionComponent = () => {
    return (
        <>
            <HomeCard />

            
            
            <TopicMainProgress chapter ={data.chapters} />
        </>
    )
}

export default Homepage