export const youTextDataExplainer = () => {
    return (
        <>
            how to save your youText
            <span className="material-symbols-sharp cursor-pointer">info</span>
            <div className="tooltiptext">
                <p>For your dynamic youText, you can save it like so</p>
                <br></br>
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
    return array
        .slice() // Create a shallow copy of the array
        .sort((a: any, b: any) => b.time.localeCompare(a.time));
};


export const getCurrentTimeAndDate = (type: string): string => {
    const now = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    const formattedDate = now.toLocaleString("en-US", dateOptions);
    const formattedTime = now.toLocaleString("en-US", timeOptions);

    if (type === "date") {
        return formattedDate;
    } else if (type === "time") {
        return formattedTime;
    } else {
        return `${formattedDate} ${formattedTime}`;
    }
};
