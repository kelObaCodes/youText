"use client";

import Texts from "./texts";
import SaveTexts from "./saveTexts";
import Welcome from "./welcome";

export default function ParentContainer() {
    return (
        <>
            <div className="welcome-cover">
                <Welcome />
                <SaveTexts />
                <Texts />
            </div>
        </>
    );
}
