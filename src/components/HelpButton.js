import React, { useState } from "react";

const gameRules = {
    rules: [
        "Click on the Start Game button",
        "You have to guess the hidden word",
        "Type a letter, or click on a letter to see if it's correct or not",
        "Correct letters will show in colour green",
        "Wrong letters will show in colour red-ish",
        "If the number of wrong attempts is equal to 10, you'll be hung :(",
        "You win when you guess correctly the hidden word :)",
        "Enjoy and Good Luck!"

    ]
}

// help component
const HelpButton = () => {
    // state for hiding window
    const [ hideWindow, setHideWindow ] = useState(true);

    // onClick
    const showWindow = () => {

        setHideWindow(prevState => !prevState);
    }


    return (
        <div className="absolute">
            <button 
                className="w-20 h-10 bg-purple-400 handwriting text-xl rounded-md rounded-t-none ml-4 -rotate-1 -m-1 text-zinc-800"
                onClick={showWindow}
            >
                {hideWindow
                ?
                "Help?"
                :
                "Close"
                }
            </button>
            <div>
                {hideWindow
                ?
                    <div className="hidden">

                    </div>
                :
                    <div className="absolute bg-pink-300 w-[300px] h-fit mt-1 rounded-md -rotate-1 opacity-90 shadow-xl ml-4">
                        <ol className="flex-row text-2xl handwriting pt-2 text-zinc-800">Hangman Rules:
                            {gameRules.rules.map((rule, index) => (
                            <li key={`list${index}`} className="text-left text-lg px-3 pb-2">
                                - {rule}
                            </li>
                            ))}
                        </ol>

                    </div>
                }
            </div>
        </div>
    )
}

export default HelpButton;