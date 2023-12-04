"use client";

import { useState, useEffect, useRef } from "react";
import { sortArrayByRecent } from "./../helper";

type Props = {
    texts: string;
};

export default function Texts({ texts }: Props) {
    
    const [currentId, setCurrentId] = useState<number>(0);
    const [currentText, setCurrentText] = useState<{
        text: string;
        time: string;
        id: number;
        active: boolean;
        header: string;
        dynamicWordsForText: string[];
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
    }, [texts]);

    const scrollToDiv = (index: number) => {
        if (divRefs.current[index]) {
            divRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
        }
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
                                  
                                    <div
                                        className={`${"saved-texts"} ${
                                            data.id === currentId
                                                ? "active-text"
                                                : ""
                                        }`}
                                        onClick={()=> {
                                            setCurrentText(data);
                                            setCurrentId(data.id);
                                        }}
                                    >
                                        <div className="relative-pos">
                                            <p className="text-time">
                                                {data.time}
                                            </p>
                                        </div>
                                        <div>
                                            <h3>
                                                {" "}
                                                {data.text
                                                    .slice(0, 6)
                                                    .toLowerCase()}
                                            </h3>

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
                    <h2>{currentText?.header}</h2>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                        {currentText?.text}
                    </p>

                    <p className="time-block">{currentText?.time}</p>

                    <div className="action-div">
                        <div className="action">
                            <span>copy text </span>
                            <span className="material-symbols-sharp ml-20">
                                east
                            </span>
                        </div>
                        <div className="action">
                            <span>Add dynamic data </span>
                            <span className="material-symbols-sharp ml-20">
                                east
                            </span>
                        </div>
                    </div>
                </div>
                <div className="dynamic-content">
<div>
    <p>
        <b>
            [dynamic text]
            </b>
    </p>
    <input
                        type="text"
                        name="header"
                        value={""}
                        // onChange={handleChange}
                        placeholder="Text heading"
                        // onMouseEnter={() => setTranslation(true)}
                        // onClick={() => setTranslation(true)}
                    />
</div>
               
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Debitis cumque, quibusdam aut incidunt doloremque
                        officia voluptatem vel molestiae dolor quasi. Nobis
                        tenetur eos repellat aliquid dolores maxime tempora
                        reprehenderit quisquam? Corrupti quis assumenda eos
                        voluptatum rerum. Nesciunt, neque repellendus porro
                        quidem in omnis, atque eius incidunt libero cum itaque.
                        Veritatis excepturi eligendi impedit! Culpa ratione
                        quia, illum in repellendus dolor.
                    </p>
                </div>
            </div>
        </>
    );
}
