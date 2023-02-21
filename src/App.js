import React, { useState, useEffect } from "react";
import HangmanBody from "./components/HangmanBody";
import HangmanKeys from "./components/HangmanKeys";
import HangmanWord from "./components/HangmanWord";
import Header from "./components/Header";
import HelpButton from "./components/HelpButton";



function App() {
    // start game button - state
    const [ isStarting, setIsStarting ] = useState(null);

    // word to guess - state
    const [ wordToGuess, setWordToGuess ] = useState('');

    // win or lose
    const [ hasWon, setHasWon ] = useState('null');

    // player guessed letters - state
    const [ playerLetters, setPlayerLetters ] = useState([]);

    // an array of the correct letters - state
    const [ correctLettersArr, setCorrectLettersArr ] = useState([]);

    // an array of the wrong letters - state
    const [ wrongLettersArr, setWrongLettersArr ] = useState([]);


    // fetching random words from an API
    // http://random-word-api.herokuapp.com/home
    useEffect(() => {

        // Improvement from Task 50 - "In the inputname.js file you could've added a try/catch block around the fetch call instead of inside the asynchronous function to better handle errors.". I'm trying to understand what that means, apologies. I researched about this before and most people suggest to add a try/catch inside the async function. Please let me know your thoughts. Some clarification will be helpful. Cheers
        async function getWordToGuess() {
            try {
                // if button startGame is true - fetch
                if (isStarting != null) {
                    let response = await fetch ("https://random-word-api.herokuapp.com/word");
                    let data = await response.json();

                    // store the fetch word
                    let randomWord = data[0];

                    // set new state
                    setWordToGuess(randomWord);

                }
                // if button startGame is false - no fetch
                else {
                    return;
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        // call the function
        getWordToGuess();
    },[isStarting]);

    // KEYBOARD
    // keyboard keys evenlistener on key press
    useEffect(() => {
        // only add event listener if hasWon === null
        if (hasWon != null) return;
        // if (wordToGuess.split('').length === 0) return;

        const keyPress = (e) => {
            const key = e.key // key press
            if (!key.match(/^[a-z]$/)) return; // check that keys only match from a to z letters

            if (playerLetters.includes(key)) return; // if a key is already in the playerLetters, do nothing and stop here!

            // if it isn't, add key to playerLetters array
            setPlayerLetters(
                [...playerLetters, key]
            );
            
            e.preventDefault()

            // call arrayDistribute function
            arrayDistribute(wordToGuess, key);
        }

        // add key evenlistener to the document
        document.addEventListener("keypress", keyPress);
        
        return () => {
            document.removeEventListener("keypress", keyPress) // removing the event listener
        }
    },[wordToGuess, playerLetters, hasWon])

    // useEffect to check is player has won
    useEffect(() => {
        if (wordToGuess.split('').length === 0) {
            setHasWon(null)
        }

        else if (wordToGuess.split('').every((letter) => (correctLettersArr.includes(letter)))) {
            setHasWon(true);
        }

        else if (wrongLettersArr.length === 10) {
            setHasWon(false);
        }
    },[correctLettersArr, wrongLettersArr]);

    // function to distribute typed or clicked key to the corresponding arrays
    // playerLetters , correctLettersArr , wrongLettersArr
    const arrayDistribute = (wordStr, key) => {
        // check for correct and incorrect letters and add them to arrays
        for (let i = 0; i < wordStr.split('').length; i++) {
            if (wordStr.includes(key)) {
                if (key === wordStr.split('')[i]) {
                    setCorrectLettersArr(
                        [ ...correctLettersArr, key ]
                    )
                }
            } else {
                setWrongLettersArr(
                    [ ...wrongLettersArr, key ]
                )
            }
        }
    }

    // MOUSE CLICKS
    // onClick - button keys on the keyboard
    const clickedKeys = (e) => {
        e.preventDefault();

        // only add event listener if hasWon === null
        if (hasWon != null) return;

        // if (wordToGuess.split('').length === 0) return;

        const key = e.target.innerHTML;

        // all letters typed
        setPlayerLetters(
            [...playerLetters, key]
        );

        // call arrayDistribute function
        arrayDistribute(wordToGuess, key);

    }

    // start game
    const buttonStartGame = () => {
        if (hasWon == true || hasWon == false) {
            // window.location.reload(false)

            setCorrectLettersArr([]);
            setWrongLettersArr([]);
            setPlayerLetters([]);
            setHasWon(null);
        }

        setIsStarting(prevState => !prevState);

    }

    const buttonResetGame = () => {
        
        setCorrectLettersArr([]);
        setWrongLettersArr([]);
        setPlayerLetters([]);

        setIsStarting(prevState => !prevState);
    }


    return (
        <div className="max-w-[800px] flex-col gap-8 mx-auto items-center">
            <div className="text-lg text-center">
                <HelpButton />
                <Header hasWon={hasWon} isStarting={isStarting} resetGame={buttonResetGame} startGame={buttonStartGame}/>
            </div>
            <div className="justify-center text-center">
                <HangmanBody wrongLetters={wrongLettersArr}/>
                <HangmanWord word={wordToGuess} correctLetters={correctLettersArr} hasWon={hasWon}/>
                <HangmanKeys onClick={clickedKeys} playerLetters={playerLetters} correctLetters={correctLettersArr} wrongLetters={wrongLettersArr} hasWon={hasWon} isStarting={isStarting}/>
            </div>
        <footer className='flex justify-center'>
            <p className='bottom-0 pt-2 pb-1 handwriting text-sky-700 text-lg'>Task 52 - By: Eustachio. Feb, 2023</p>
        </footer>
        </div>
    );
};

export default App;

// I found help on Web Dev Simplified youtube channel, I learnt to use .includes a lot !!!