"use client";

import Texts from "./texts";
import SaveTexts from "./saveTexts";
import { getCurrentTimeAndDate } from "./../helper";

export default function WelcomeView() {
    const formattedTime: string = getCurrentTimeAndDate("time");

    return (
        <>
            <div className="welcome-cover">
                <div>
                    <p className="time-tag">{formattedTime}</p>
                    <span className="material-symbols-sharp time-icon">
                        timer
                    </span>
                    <span className="material-symbols-sharp image-bg">
                        edit_off
                    </span>
                </div>

                <h1 className="welcome-header">
                    Hello{" "}
                    <span className="material-symbols-outlined animate__animated  animate__jello">
                        waving_hand
                    </span>
                </h1>
                <h2> Welcome to youText</h2>

                <p>
                    We all have that one text we want handy and we just want to
                    share it with that job opportunity, loved one but we want
                    some parts to be customizable, dynamic and other parts
                    resusable, youText gives you that.
                </p>
                <button className="create-btn cursor-pointer">
                    <span className="button-text">Create your text</span>
                    <span className="material-symbols-outlined symbol-icon">
                        edit
                    </span>
                </button>
                <SaveTexts />
                <Texts />
            </div>
        </>
    );
}
