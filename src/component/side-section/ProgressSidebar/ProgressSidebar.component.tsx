import { log } from "console";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProgressSideBarApi } from "../../../api/api";
import { setChapter } from "../../../Redux/features/counter/counterslice";
import { RootState } from "../../../Redux/store";
import Progressbar from "../../progressbar/progressbar.component";
import "./ProgressSidebar.style.scss";

interface IChapterListType {
  ChapterName: string;
  ChapterProgress: number;
}

const ProgressSidebar: React.FunctionComponent = () => {

  const handleClickScroll = (ChapterName:any) => {
    const element = document.getElementById(ChapterName);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ block:'start',behavior: 'smooth' });
    
    }
    console.log("-----elemet-----",element)
  };
  const dispatch = useDispatch();
  const fetchChapter = async () => {
    try {
      const result = await ProgressSideBarApi();
      dispatch(setChapter(result));
    } catch (err) {}
  };

  useEffect(() => {
    fetchChapter();
  }, []);
  const chapter = useSelector((state: RootState) => state.chapter?.chapter);
  

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
        {chapter.map((item) => {
          return (
            <>
              <div onClick={()=>handleClickScroll(item.ChapterName.toLowerCase())}
               className ="set-cont">{item.ChapterName}</div>
              
              <Progressbar progressPercentage={item.ChapterProgress} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressSidebar;
