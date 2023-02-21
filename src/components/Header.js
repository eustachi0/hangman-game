import React from "react";

const Header = ({hasWon , isStarting, resetGame, startGame}) => {
    return (
        <>
            <h1 className="text-5xl handwriting text-zinc-600 py-3">
                Hangman Game
            </h1>

            <div>
                {/* START GAME WHEN FIRST LOAD */}
                {isStarting === null
                &&
                <button 
                    className={`px-2 rounded-md border handwriting text-xl my-2
                        ${isStarting ? "bg-sky-400 text-sky-900 border-sky-800" : "bg-teal-400 text-teal-900 border-teal-800"}
                    `}
                    onClick={startGame}
                >
                Start Game
                </button>
                }

                {/* START GAME WHEN LOST OR WIN */}
                {hasWon == true || hasWon == false
                ?
                <button 
                    className="px-2 rounded-md border handwriting text-xl my-2
                        bg-teal-400 text-teal-900 border-teal-800"
                    onClick={startGame}
                >
                New Game
                </button>
                :
                null
                }


                {/* RESET GAME */}
                {isStarting == true || isStarting == false
                ?
                <button 
                className={`px-2 rounded-md border handwriting text-xl my-2 bg-sky-400 text-sky-900 border-sky-800
                    ${hasWon == true || hasWon == false
                        ?
                        "hidden"
                        :
                        ""}`}
                onClick={resetGame}
                >
                Reset Game
                </button>
                :
                ""
                }
            </div>

            <h3 
                className={`h-16 text-4xl handwriting pt-3 w-[420px] mx-auto mt-2
                    ${hasWon
                    ?
                    "text-teal-700 w-[420px] bg-gradient-to-r from-teal-400 to-teal-200 mx-auto -rotate-1 shadow-md mt-2 h-16"
                    :
                    "text-rose-700 -rotate-1 h-16"
                    }`}>
                    {hasWon == null
                    ?
                    null
                    :
                    `${hasWon
                        ?
                        "You've WON! Play again!"
                        :
                        "You've lost... Try again!"
                        }`
                    }
            </h3>

        </>
    )
}

export default Header;