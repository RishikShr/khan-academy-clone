import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import Progressbar from "../../progressbar/progressbar.component";
import "./ProgressSidebar.style.scss";


interface ChapterListType {
  ChapterName: string;
  ChapterProgress: number;
}

const ChapterList: ChapterListType[] = [
  { ChapterName: "set", ChapterProgress: 0 },
  { ChapterName: "Relations and functions", ChapterProgress: 0 },
  { ChapterName: "Trigonometric functions", ChapterProgress: 0 },
  { ChapterName: "Complex numbers", ChapterProgress: 0 },
  { ChapterName: "Linear inequalities", ChapterProgress: 0 },
  { ChapterName: "Permutations and combinations", ChapterProgress: 0 },
]
// interface Progressprop{
//   state: {
//     annotation: string;
//     name: string;
//     points_to_earn: number;
//     id: string;
//     topics: {
//         annotation: string;
//         name: string;
//         points_to_earn: number;
//         id: string;
//     }[];
// }[]
// }
const ProgressSidebar:React.FunctionComponent = () => {
  const count = useSelector((state: RootState) => state.subject)
  return (
    <div className="progress-sd-cont-main">
      <div className="list-cont">
        <div className="list-header">
          <div className="header-one">
            <div className="nmber-list">17400</div>
            <div className="master-pnts">
              Mastery points available in course
            </div>
          </div>
          <div className="crse-smry">Course Summary</div>
        </div>
      </div>
      <div className="course-chlng-cont">
        {ChapterList.map((item)=>{
          return  <>
          <div className="set-cont" >{item.ChapterName}</div>
 
          <Progressbar progressPercentage={item.ChapterProgress}/>
          </>
        })}
       
      </div>
    </div>
  );
};

export default ProgressSidebar;
