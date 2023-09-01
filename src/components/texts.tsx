"use client";

import { useState, useEffect } from "react";
import { sortArrayByRecent } from "./../helper";

export default function Texts() {
    const [textArray, setTextArray] = useState<
        { text: string; time: string; id: number }[]
    >([]);

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

    return (
        <>
            <div>
                {textArray.length > 0 &&
                    sortArrayByRecent(textArray).map((data: any) => (
                        <>
                            <div className="saved-texts" key={data.id}>
                                <div className="relative-pos">
                                    <p className="text-time">{data.time}</p>
                                </div>
                                <div>
                                    <h3>
                                        {" "}
                                        {data.text.slice(0, 6).toLowerCase()}
                                    </h3>

                                    <p style={{ whiteSpace: "pre-wrap" }}>
                                        {data.text}
                                    </p>
                                </div>
                            </div>
                            <div className="stroke-line"></div>
                        </>
                    ))}
            </div>
        </>
    );
}
