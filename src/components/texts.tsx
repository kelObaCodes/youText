"use client";

import { useState, useEffect, useRef } from "react";
import { sortArrayByRecent } from "./../helper";
import Modal from "./Modal";

type Props = {
    texts: string;
    setStepLevel?: (text: string) => void;
};

export default function Texts({ texts, setStepLevel }: Props) {
    const [currentId, setCurrentId] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentText, setCurrentText] = useState<{
        text: string;
        time: string;
        id: number;
        active: boolean;
        header: string;
        dynamicWordsForText: [
            {
                dynamicText: string;
                dynamicTextValue: string;
            }
        ];
        dynamicWordsForHeading: string[];
    }>();
    const [textArray, setTextArray] = useState<
        { text: string; time: string; id: number; active: boolean }[]
    >([]);
    const divRefs = useRef<Array<HTMLDivElement | null>>(
        Array.from({ length: textArray?.length }, () => null)
    );

    useEffect(() => {
        const storedTextArray = JSON.parse(
            localStorage.getItem("textArray") || "[]"
        );
        setTextArray(storedTextArray);
        const indexOneText = storedTextArray[0];
        setCurrentId(indexOneText?.id);
        setCurrentText(indexOneText);
        if(storedTextArray.length < 1) {
            setStepLevel?.('form')
        }

    }, [texts, textArray.length]);

    const scrollToDiv = (index: number) => {
        if (divRefs.current[index]) {
            divRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const copyToClipboard = async () => {
        try {
            currentText?.text &&
                (await navigator.clipboard.writeText(currentText?.text));
            //   setIsCopied(true);
        } catch (err) {
            console.error("Unable to copy to clipboard", err);
        }
    };
    //   const handleClick = ()=> {
    //     addSuccess('This is a success message');

    //   }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const deleteText = () => {
        const storedTextArray = JSON.parse(
            localStorage.getItem("textArray") || "[]"
        );
        const data = storedTextArray.filter((text: any) => {
            return text.id !== currentText?.id;
        });
        localStorage.setItem("textArray", JSON.stringify(data));
        setTextArray([...data]);
    };
    return (
        <>
            <div className="preview-cover">
                <div className="texts-cover">
                    <div className="stroke-line-lead"></div>
                    {textArray.length > 0 &&
                        sortArrayByRecent(textArray).map(
                            (data: any, index: number) => (
                                <div key={data.id}>
                                    <div
                                        className="scroll-element"
                                        ref={(element) =>
                                            (divRefs.current[index] = element)
                                        }
                                    ></div>
                                    <div
                                        key={data.id}
                                        onClick={() => {
                                            scrollToDiv(index);
                                        }}
                                    >
                                        <div className="relative-pos">
                                            <p className="text-time">
                                                {data.time}
                                            </p>
                                        </div>
                                        <div
                                            className={`${"saved-texts"} ${
                                                data.id === currentId
                                                    ? "active-text"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                setCurrentText(data);
                                                setCurrentId(data.id);
                                            }}
                                        >
                                            <div>
                                                <h3> {data.header}</h3>

                                                <p
                                                    style={{
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {data.text}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="stroke-line"></div>
                                    </div>
                                </div>
                            )
                        )}
                </div>
                <div className="text-details">
                    <h2 className="mb-10">{currentText?.header}</h2>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                        {currentText?.text}
                    </p>

                    <p className="time-block">{currentText?.time}</p>

                    <div className="action-div">
                        <div className="action">
                            <span className="material-symbols-outlined">
                                chat_add_on
                            </span>
                        </div>
                        <div className="action" onClick={copyToClipboard}>
                            {/* <span>copy text </span> */}
                            <span className="material-symbols-outlined">
                                copy_all
                            </span>
                        </div>
                        <div
                            className="action"
                            onClick={() => {
                                openModal();
                            }}
                        >
                            {/* <span>copy text </span> */}
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </div>

                        {/* <div className="action">
                            <span>copy text </span>
                            <span className="material-symbols-outlined">
                                contract_edit
                            </span>
                        </div> */}
                        {/* <div className="action">
                            <span>Add dynamic data </span>
                            <span className="material-symbols-sharp ml-20">
                                east
                            </span>
                        </div> */}
                    </div>
                </div>
                <div className="dynamic-content">
                    <>
                        {currentText?.dynamicWordsForText &&
                            currentText?.dynamicWordsForText?.length > 0 && (
                                <h3 className="mb-10">Dynamic Texts</h3>
                            )}
                        {currentText?.dynamicWordsForText?.map(
                            (data, index) => (
                                <div key={index}>
                                    <p>
                                        <b>[{data?.dynamicText}]</b>
                                    </p>
                                    <input
                                        type="text"
                                        name={`${data?.dynamicTextValue}`}
                                        // value={`${data?.dynamicTextValue}`}
                                        // onChange={handleChange}
                                        placeholder={`text`}
                                        // onMouseEnter={() => setTranslation(true)}
                                        // onClick={() => setTranslation(true)}
                                    />
                                </div>
                            )
                        )}
                        <button className="update-text">Update text</button>
                    </>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onYes={deleteText}
                >
                    <p>Are you sure you want to delete this text?</p>
                </Modal>
            </div>
        </>
    );
}
