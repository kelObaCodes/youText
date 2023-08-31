"use client";

import { useState, ChangeEvent } from "react";
import ToolTip from "./tooltip";
import { youTextDataExplainer } from "./../helper";
import EmojiPicker from "emoji-picker-react";

export default function WelcomeView() {
    const [text, setText] = useState<string>("");
    const [translation, setTranslation] = useState<boolean>(false);
    const [showEmoji, setShowEmoji] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        const formattedText = inputValue.replace(/\[(.*?)\]/g, "[<b>$1</b>]");

        setText(formattedText);
    };

    return (
        <>
            <div className="welcome-cover">
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

                {<ToolTip toolTipData={youTextDataExplainer()} />}

                <div className="text-area-div">
                    <textarea
                        rows={15}
                        onChange={handleChange}
                        placeholder="Type your text here..."
                        onMouseEnter={() => setTranslation(true)}
                        onBlur={() => setTranslation(!translation)}
                    ></textarea>

                    {translation && (
                        <p
                            className="translate-youText"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                </div>
                <div className="emoji-cover">
                    {showEmoji && <EmojiPicker />}
                </div>

                <button className="create-btn cursor-pointer">
                    <span className="button-text">Save you</span>
                    <span className="material-symbols-sharp symbol-icon">
                        control_point_duplicate
                    </span>
                </button>
            </div>
        </>
    );
}
