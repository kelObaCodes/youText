export const youTextDataExplainer = () => {
    return (
        <>
            How to save your youText
            <span className="material-symbols-sharp cursor-pointer">info</span>
            <div className="tooltiptext">
                <p>For your dynamic youText, you can save it like so</p>
                <br></br>
                
                    <h4><b>Job application</b></h4>
                <p>
              <span className="material-symbols-sharp">format_quote</span>
                   I have been trying to reach out to <b>[company_name]. </b>
                    My name is <b>[myname]</b> and i am a very skilled{" "}
                    <b>[profession] </b> and i have so many things that i would
                    be interested in managing for <b> [ceo_name] </b> and i have
                    other things that i have done for you
                    <span className="material-symbols-sharp">format_quote</span>
                </p>
                <br></br>
                <p>
                    Explanation: for sentences or words you want to be dynamic,
                    save the keywords in brackets without space and click save.
                </p>
            </div>
        </>
    );
};

export const handleCopyClick = (content: any) => {
    if (content) {
        content.select();
        document.execCommand("copy");
        // Optionally, you can provide user feedback here (e.g., a toast message).
        alert("Text copied to clipboard!");
    }
};

export const sortArrayByRecent = (array: any) => {
    return array.sort((a: any, b: any) => {
        const timeA = new Date(a.time);
        const timeB = new Date(b.time);
        return timeB.getTime() - timeA.getTime();
    });
};

export const getCurrentTimeAndDate = (type: string): string => {
    const now = new Date();
    const monthAbbreviation = new Intl.DateTimeFormat("en-US", {
        month: "short",
    }).format(now);
    const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
        now
    );
    const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
        now
    );

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    const formattedDate = `${monthAbbreviation} ${day}, ${year}`;
    const formattedTime = now.toLocaleString("en-US", timeOptions);

    if (type === "date") {
        return formattedDate;
    } else if (type === "time") {
        return formattedTime;
    } else {
        return `${formattedDate} ${formattedTime}`;
    }
};

export const extractWordsInBrackets = (sentence: string) => {
    const bracketContents = sentence.match(/\[([^[\]]*)\]/g);

    if (bracketContents) {
        const wordsArray = bracketContents.map((content) =>
            content.replace(/\[|\]/g, "").trim()
        );
        return wordsArray;
    } else {
        return [];
    }
};
