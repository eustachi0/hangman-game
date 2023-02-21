import React from "react";
import state1 from "../images/state1.png";
import state2 from "../images/state2.png";
import state3 from "../images/state3.png";
import state4 from "../images/state4.png";
import state5 from "../images/state5.png";
import state6 from "../images/state6.png";
import state7 from "../images/state7.png";
import state8 from "../images/state8.png";
import state9 from "../images/state9.png";
import state10 from "../images/state10.png";
import state11 from "../images/state11.png";

// functional component - using props to sync with app.js (parent) states
const HangmanBody = ({wrongLetters}) => {
    // receiving state values as props

    // array of images to display the drawings - there are 11 states, state1 is the initial state, it will display a blank image after user clicks on the start game button
    const imageStatesArr = [state1,state2,state3,state4,state5,state6,state7,state8,state9,state10,state11]

    return (
        <div className="flex w-[350px] h-[300px] items-center justify-center mx-auto -mt-2">
            {wrongLetters.length > 0
            ?
                <>
                    {/* display images depending on the wrongLettersArr length */}
                    {imageStatesArr.slice(0, wrongLetters.length + 1).map((image, index) => (
                        <div className="absolute h-[300px]" key={`image${index}`}>
                            <img className="h-[300px]" src={image} alt="" />
                        </div>
                    ))}
                </>
            :
            <div className="absolute h-[300px]">
                <img className="h-[300px]" src={imageStatesArr[0]} alt="" />
            </div>
            }
        </div>
    )
}

export default HangmanBody;