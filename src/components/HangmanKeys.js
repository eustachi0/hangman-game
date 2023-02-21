import React from "react";

// functional component
const HangmanKeys = ({onClick , playerLetters, correctLetters, wrongLetters, hasWon, isStarting}) => {
    // array of keys
    const keysArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


    return (
        <div className="flexbox mx-10 px-6 pt-0 pb-2">
            {isStarting != null
            ?
            <div>
                {keysArr.map((key) => (
                    <button key={key} className={
                    `w-9 h-9 m-1 uppercase handwriting text-2xl rounded-lg text-zinc-700 border-2 border-zinc-700
                        ${hasWon != null || isStarting == null ? "opacity-50 cursor-default" : null}
                        ${correctLetters.includes(key)
                        ? 
                        "bg-teal-400 text-teal-900 border-teal-900"
                        :
                            `${wrongLetters.includes(key)
                            ? "bg-rose-200 line-through decoration-rose-400 decoration-4 text-zinc-500 border-zinc-500"
                            :
                            ""
                            }`
                        }`
                    }
                    onClick={onClick}
                    disabled={playerLetters.includes(key)}
                    >
                        {key}
                    </button>
                ))}
            </div>
            :
            <div>
                {keysArr.map((key) => (
                    <button key={key} className={
                    `w-9 h-9 m-1 uppercase handwriting text-2xl rounded-lg text-zinc-700 border-2 border-zinc-700 opacity-50 cursor-default`
                    }
                    disabled
                    >
                        {key}
                    </button>
                ))}
            </div>
            }
        </div>
    )
}

export default HangmanKeys;