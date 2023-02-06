import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import ProgressBar from "../../progressbar/progressbar.component";
import "./TopicProgress.style.scss";

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

const TopicProgress:React.FunctionComponent<chapterprops> = (props):JSX.Element => {
  const count = useSelector((state: RootState) => state?.subject?.chapters)
  console.log(count,"----count")
  return (
    <div className="topicprogress-mn-cont">
     
      {count.map((item)=>{
          return  (<div className="card-cont" key={item.id}>
          <div className="header">
            <div className="chapter">{item.name}</div>
            <div className="point-progress">0/{item.points_to_earn} Mastery points
            <ProgressBar progressPercentage={10}/>
            </div>
          </div>
         <div className="mid-section-card">
            {item.topics.map((subitem)=>{
              return (<div key={subitem.id}>{subitem.name}</div>)
            })}
          
          
         </div>
        
        </div>)
      })}

{count.map((item)=>{
          return  (<div className="card-cont" key={item.id}>
          <div className="header">
            <div className="chapter">{item.name}</div>
            <div className="point-progress">0/{item.points_to_earn} Mastery points
            <ProgressBar progressPercentage={10}/>
            </div>
          </div>
         <div className="mid-section-card">
            {item.topics.map((subitem)=>{
              return (<div key={subitem.id}>{subitem.name}</div>)
            })}
          
          
         </div>
        
        </div>)
      })}




     
    </div>
  );
};

export default TopicProgress;
