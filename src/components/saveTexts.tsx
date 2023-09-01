"use client";

import { useState, useEffect, ChangeEvent, useRef } from "react";
import ToolTip from "./tooltip";
import {
    youTextDataExplainer,
    getCurrentTimeAndDate,
} from "./../helper";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import Image from "next/image";
import emojiPic from "../images/emoji.png";

export default function WelcomeView() {
    const [text, setText] = useState<string>("");
    const [translation, setTranslation] = useState<boolean>(false);
    const [showEmoji, setShowEmoji] = useState<boolean>(false);
    const [textArray, setTextArray] = useState<
        { text: string; time: string; id: number }[]
    >([]);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        const formattedText = inputValue.replace(/\[(.*?)\]/g, "[<b>$1</b>]");

        setText(formattedText);
    };

    function onClickEmoji(emojiData: EmojiClickData, event: MouseEvent) {
        console.log(emojiData);
        const textEmoji = text + emojiData.emoji;
        setText(textEmoji);
    }

    const handleCopyClick = () => {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand("copy");
        }
    };

    useEffect(() => {
        const storedTextArray = JSON.parse(
            localStorage.getItem("textArray") || "[]"
        );
        setTextArray(storedTextArray);
    }, []);
    useEffect(() => {
        if (textArray.length > 0)
            localStorage.setItem("textArray", JSON.stringify(textArray));
    }, [textArray.length]);

    const handleAddText = () => {
        const currentTime = getCurrentTimeAndDate("both");
        setTextArray([
            { text: text, time: currentTime, id: Math.random() },
            ...textArray,
        ]);
        setText("");
    };

    return (
        <>
            <div>

                {<ToolTip toolTipData={youTextDataExplainer()} />}

                <div className="text-area-div">
                    <span
                        className="material-symbols-sharp cursor-pointer"
                        onClick={() => {
                            handleCopyClick();
                            setTranslation(true);
                        }}
                    >
                        content_copy
                    </span>
                    <textarea
                        value={text}
                        rows={15}
                        onChange={handleChange}
                        ref={textAreaRef}
                        placeholder="Type your text here..."
                        onMouseEnter={() => setTranslation(true)}
                        onBlur={() => {
                            setShowEmoji(false);
                            setTranslation(!translation);
                        }}
                    ></textarea>

                    {translation && (
                        <p
                            className="translate-youText animate__animated  animate__fadeIn"
                            dangerouslySetInnerHTML={{ __html: text }}
                            style={{ whiteSpace: "pre-wrap" }}
                        />
                    )}
                </div>
                <div
                    onClick={() => setShowEmoji(!showEmoji)}
                    className="cursor-pointer"
                    onBlur={() => {
                        setShowEmoji(false);
                    }}
                >
                    <Image
                        src={emojiPic}
                        alt="Picture of emoji"
                        height={20}
                        width={20}
                    />
                </div>

                <div className="emoji-cover">
                    {showEmoji && <EmojiPicker onEmojiClick={onClickEmoji} />}
                </div>

                <button
                    className="create-btn cursor-pointer"
                    onClick={() => handleAddText()}
                >
                    <span className="button-text">Save you</span>
                    <span className="material-symbols-sharp symbol-icon">
                        control_point_duplicate
                    </span>
                </button>
            </div>
        </>
    );
}
