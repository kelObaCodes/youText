
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { sortArrayByRecent } from "../helper";
import Modal from "./Modal";
import { NotificationList, useNotificationAdd } from "./Notifications";
import { useRouter } from 'next/navigation';

type Props = {
    texts?: string;
    setStepLevel?: (text: string) => void;
};

export default function Texts({ texts, setStepLevel }: Props) {
    const [currentId, setCurrentId] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTextUpdated, setIsTextUpdated] = useState(false);
    const { addSuccess } = useNotificationAdd();
     const router = useRouter()
     
    const [currentText, setCurrentText] = useState<{
        text: string;
        time: string;
        updatedText: string
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
        if (storedTextArray.length < 1) {
            setStepLevel?.("form");
        }
    }, [texts, textArray.length]);

    useEffect(()=> {
        if(isTextUpdated) {
            localStorage.removeItem("textArray");
        const data = textArray.map((text: any) => {
            if (text.id === currentText?.id) {
                text = currentText
            }
            return text
        });
        localStorage.setItem("textArray", JSON.stringify(data));
        setTextArray([...data]);
        addSuccess("Current text updated successfully");
        setIsTextUpdated(false)
    }

    },[isTextUpdated])

    const updateCurrentText = () => {
        // Replace dynamicText placeholders in the text property with dynamicTextValue
        const updatedText = currentText?.dynamicWordsForText.reduce(
          (acc, dynamicWord) => {
            const dynamicTextRegex = new RegExp(`\\[${dynamicWord.dynamicText}\\]`, 'g');
            return acc?.replace(dynamicTextRegex, dynamicWord.dynamicTextValue);
          },
          currentText.text
        );
    
        // Update the state with the modified text
        setCurrentText((prevCurrentText:any) => ({
          ...prevCurrentText,
          updatedText: updatedText
        }));
       
    setIsTextUpdated(true)
      };

    const scrollToDiv = (index: number) => {
        if (divRefs.current[index]) {
            // divRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const copyToClipboard = async () => {
        try {
            currentText?.text &&
                (await navigator.clipboard.writeText(currentText?.text));
            //   setIsCopied(true);
            addSuccess("Copied to clipboard");
        } catch (err) {
            console.error("Unable to copy to clipboard", err);
        }
    };

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
        addSuccess("You text deleted successfully");
    };

    const updateText = ()=> {
        const isAnyDynamicTextValueEmpty = currentText?.dynamicWordsForText?.some(item => item.dynamicTextValue === '');
        if(isAnyDynamicTextValueEmpty) {
            addSuccess("Please fill in all of the dynamic texts");
            return
        }
        updateCurrentText()
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = event.target;
        setCurrentText((prevCurrentText:any) => {
            const updatedDynamicWordsForText = [...prevCurrentText.dynamicWordsForText];
            updatedDynamicWordsForText[index]["dynamicText"] = name;
            updatedDynamicWordsForText[index]["dynamicTextValue"] = value;
            return {
              ...prevCurrentText,
              dynamicWordsForText: updatedDynamicWordsForText,
            };
          });
      };
    return (
        <div>
            <button
                className="add-you-text"
                onClick={() => router.push("/save")}
            >
                add youText
            </button>
            <div className="preview-cover">
                <div className="texts-cover">
                    <div className="stroke-line-lead"></div>
                    {textArray.length > 0 &&
                        sortArrayByRecent(textArray).map(
                            (data: any, index: number) => (
                                <div key={data.id}>
                                    <div
                                        className="scroll-element"
                                       
                                    ></div>
                                    <div
                                        key={data.id}
                                        onClick={() => {
                                            scrollToDiv(index);
                                        }}
                                    >
                                        <div className="relative-pos"
                                         ref={(element) =>
                                            (divRefs.current[index] = element)
                                        }
                                        >
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
                    {currentText?.updatedText ? currentText?.updatedText : currentText?.text}
                    </p>

                    <p className="time-block">{currentText?.time}</p>

                    <div className="action-div">
                        {/* <div className="action">
                            <span className="material-symbols-outlined">
                                chat_add_on
                            </span>
                        </div> */}
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
                {currentText?.dynamicWordsForText &&
                            currentText?.dynamicWordsForText?.length > 0 && (
                <div className="dynamic-content">
                    <>
                        {/* {currentText?.dynamicWordsForText &&
                            currentText?.dynamicWordsForText?.length > 0 && (
                                <h3 className="mb-10">Dynamic Texts</h3>
                            )} */}
                        {currentText?.dynamicWordsForText?.map(
                            (data, index) => (
                                <div key={index}>
                                    <p>
                                        <b>{data?.dynamicText}</b>
                                    </p>
                                    <input
                                        type="text"
                                        name={`${data?.dynamicText}`}
                                        value={`${data?.dynamicTextValue}`}
                                        onChange={(e) => handleChange(e, index)}
                                        placeholder={`text`}
                                        // onMouseEnter={() => setTranslation(true)}
                                        // onClick={() => setTranslation(true)}
                                    />
                                </div>
                            )
                        )}
                        <button className="update-text" 
                        onClick={()=> updateText()}
                        >Update text</button>
                    </>
                </div>
                            )} 

                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onYes={deleteText}
                >
                    <p>Are you sure you want to delete this text?</p>
                </Modal>
                <NotificationList />
            </div>
        </div>
    );
}
