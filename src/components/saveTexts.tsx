
import { useState, useEffect, ChangeEvent, useRef } from "react";
import ToolTip from "./tooltip";
import {
    youTextDataExplainer,
    getCurrentTimeAndDate,
    extractWordsInBrackets,
} from "../helper";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import Image from "next/image";
import emojiPic from "../images/emoji.png";

type Props = {
    saveUserText?: (user: string) => void;
    setStepLevel?: (text: string) => void;
};

export default function SaveTexts({ saveUserText, setStepLevel }: Props) {
    const [text, setText] = useState<string>("");
    const [textHeading, setTextHeading] = useState<string>("");
    const [translation, setTranslation] = useState<boolean>(false);
    const [showEmoji, setShowEmoji] = useState<boolean>(false);
    const [textArray, setTextArray] = useState<
        { text: string; time: string; id: number; header: string }[]
    >([]);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        const inputValue = event.target.value;
        // const formattedText = inputValue.replace(/\[(.*?)\]/g, "[<b>$1</b>]");

        if (name === "header") {
            setTextHeading(value);
        } else {
            setText(inputValue);
        }
    };

    function onClickEmoji(emojiData: EmojiClickData, event: MouseEvent) {
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
        saveUserText?.(text);
    }, [text]);

    useEffect(() => {
        const storedTextArray = JSON.parse(
            localStorage.getItem("textArray") || "[]"
        );
        setTextArray(storedTextArray);
    }, []);

    const handleAddText = () => {
        if(!text || !textHeading) {
            return 
        }
        const currentTime = getCurrentTimeAndDate("both");
        const dynamicWords = extractWordsInBrackets(text);
        const dynamicHeader = extractWordsInBrackets(textHeading);

        const newArray = [
            {
                text: text,
                time: currentTime,
                updatedText:'',
                id: Math.random(),
                header: textHeading,
                dynamicWordsForText: [...dynamicWords],
                dynamicWordsForHeading: [...dynamicHeader],
            },
            ...textArray,
        ];
        setTextArray(newArray);
        localStorage.setItem("textArray", JSON.stringify(newArray));

        setText("");
        setTextHeading("");
        setStepLevel?.("viewTexts");
    };

    return (
        <>
            <div
                className="welcome-cover"
                onMouseEnter={() => setTranslation(true)}
            >
                 {/* <div className="notification-center">
                    <div className="noty-box"></div>
                </div> */}
                {<ToolTip toolTipData={youTextDataExplainer()} />}

                <div className="text-area-div">
                    <input
                        type="text"
                        name="header"
                        value={textHeading}
                        onChange={handleChange}
                        placeholder="Text heading"
                        onMouseEnter={() => setTranslation(true)}
                        onClick={() => setTranslation(true)}
                    />
                    <div>
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
                            name="content"
                            onChange={handleChange}
                            ref={textAreaRef}
                            placeholder="Type your text here..."
                        ></textarea>
                    </div>

                    {translation && (
                        <p
                            className="translate-youText animate__animated  animate__fadeIn"
                            dangerouslySetInnerHTML={{
                                __html:
                                    `${"<h3>" + textHeading + "</h3>"}` + text,
                            }}
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

                <div
                    className="emoji-cover"
                    onMouseEnter={() => setTranslation(true)}
                >
                    { showEmoji && <EmojiPicker onEmojiClick={onClickEmoji} /> }
                </div>

                <button
                    className="create-btn cursor-pointer"
                    onClick={() => handleAddText()}>
                    <span className="button-text">Save you</span>
                    <span className="material-symbols-sharp symbol-icon">
                        control_point_duplicate
                    </span>
                </button>
            </div>
        </>
    );
}
