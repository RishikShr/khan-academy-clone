import React from "react";
import { JsxElement } from "typescript";
import { useSelector, useDispatch } from 'react-redux'
import "./home-card.style.css";
import { RootState } from "../../Redux/store";



interface homecardprops {
  class: string;
  subject: string;
}
const HomeCard: React.FunctionComponent<homecardprops> = (
  props
): JSX.Element => {

  const count = useSelector((state: RootState) => state.subject)
  const dispatch = useDispatch()
  return (
    <div className="home-card-cont">
      <div className="card-in-cont">
        <div className="subject">{count.subject}</div>
        <div className="class-subj">
          Class {count.class} {count.subject}(India){" "}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
