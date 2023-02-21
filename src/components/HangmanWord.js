import React from "react";

// functional component
const HangmanWord = ({word, correctLetters, hasWon}) => {
    // receiving state values as props

    return (
        <div className="gap-1 font-semibold uppercase pt-8 pb-6 text-zinc-600 flex justify-center mx-10 opacity-90 h-24 -mt-4">
            {word.split("").map((letter, index) => (
                <span className="handwriting font-mono w-7 border-b-4 border-zinc-500 mx-1 px-1 text-3xl" key={`letter${index}`}>
                    <span 
                    className={
                        `${correctLetters.includes(letter) 
                            ? `${hasWon ? "text-teal-700" : "visible"}`
                            : `${hasWon == null ? "invisible" : "visible text-rose-700"}`
                            }`
                        }
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord;