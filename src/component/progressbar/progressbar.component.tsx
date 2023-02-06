import React from 'react'
import './progressbar.style.scss'
// const Progressbar = () => {
//   return (
//    <div className="myProgress">
// <div className="myBar"  />
// </div>
//   )
// }

// export default Progressbar
interface ProgressBarProps {
    progressPercentage:number;
   }
const ProgressBar: React.FunctionComponent<ProgressBarProps> = (
    props
  ): JSX.Element => {
    return (
      <div className="myProgress">
        <div className="myBar" style={{ width: `${props.progressPercentage}%` }} />
      </div>
    );
  };
  
  export default ProgressBar;