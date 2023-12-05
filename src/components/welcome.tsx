"use client";


type Props = {
    setStepLevel?: (text: string) => void;
}

export default function WelcomeView({setStepLevel}:Props) {

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
                <button className="create-btn cursor-pointer" onClick={()=>setStepLevel?.('form')}>
                    <span className="button-text">Create your text</span>
                    <span className="material-symbols-outlined symbol-icon">
                        edit
                    </span>
                </button>
             
            </div>
        </>
    );
}
