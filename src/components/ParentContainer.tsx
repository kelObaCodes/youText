
import { getCurrentTimeAndDate } from "../helper";


import WelcomeView from "./Welcome";


export default function ParentContainer() {


    const formattedTime: string = getCurrentTimeAndDate("time");

    return (
        <>
            <div className="off-text-area">
                <p className="time-tag">{formattedTime}</p>
                <span className="material-symbols-sharp time-icon">timer</span>
                <span className="material-symbols-sharp image-bg">
                    edit_off
                </span>
            </div>
          <WelcomeView/>
        </>
    );
}
