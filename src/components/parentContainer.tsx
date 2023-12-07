"use client";

import { useState, useEffect, ChangeEvent, useRef } from "react";
import Texts from "./texts";
import SaveTexts from "./saveTexts";
import WelcomeView from "./welcome";
import { getCurrentTimeAndDate } from "./../helper";
import {  NotificationProvider } from './Notifications';
import ComponentTest from './TextComponent';
export default function ParentContainer() {
    const [text, setText] = useState<string>("");
    const [step, setStep] = useState<number | string>("viewTexts");
    // const [step, setStep] = useState<number | string>("form");
    const [textArray, setTextArray] = useState<
        { text: string; time: string; id: number }[]
    >([]);
    const saveUserText = (text: string) => {
        setText(text);
    };
    const setStepLevel = (text: string) => {
        setStep(text);
    };
    useEffect(() => {
        const storedTextArray = JSON.parse(
            localStorage.getItem("textArray") || "[]"
        );
        setTextArray(storedTextArray);
    }, []);

    const formattedTime: string = getCurrentTimeAndDate("time");

    return (
        <>
           <NotificationProvider>

<ComponentTest/>

    </NotificationProvider>
            <div>
                
                {(step === "viewTexts") && (
                        <button className="add-you-text"
                        onClick={()=> setStep('form')}
                        >add youText</button>
                    )
                }
                <p className="time-tag">{formattedTime}</p>
                <span className="material-symbols-sharp time-icon">timer</span>
                <span className="material-symbols-sharp image-bg">
                    edit_off
                </span>
            </div>
            <div>
                {
                textArray.length < 1 && step === "welcome" &&  (
                    <WelcomeView 
                    setStepLevel={setStepLevel}
                    />
                )
               }

                {(textArray.length > 0 && step === "viewTexts")  && <Texts texts={text} />}

                {(step === "form") && (
                    <SaveTexts
                        saveUserText={saveUserText}
                        setStepLevel={setStepLevel}
                    />
                )}
               
            </div>
        </>
    );
}
