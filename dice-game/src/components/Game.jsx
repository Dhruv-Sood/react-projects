import { useState } from "react"

const diceImages = [
    "https://i.ibb.co/z4HTKpH/dice.jpg",
    "https://i.ibb.co/Vxh373H/dice-2.jpg",
    "https://i.ibb.co/VLWYzG8/dice-3.png", 
    "https://i.ibb.co/myDdHvN/dice-4.png",
    "https://i.ibb.co/k10T7pq/dice-5.png", 
    "https://i.ibb.co/m0gZ4h7/dice-6.png"
]

function Game() {


    const [selectedNumber, setSelectedNumber] = useState(null)
    const [showRules, setShowRules] = useState(false)
    const [currentDice , setCurrentDice] = useState(1)
    const [score , setScore] = useState(0)
    const [showError , setShowError] = useState(false)
    const randomNumberGenerator = () => {
        if (selectedNumber){
            let randomNumber = Math.floor(Math.random() * 6) + 1
            setCurrentDice(randomNumber)
            

            // Updating Score
            if(randomNumber === selectedNumber){
                setScore(previous => previous+selectedNumber)
            }
            else{
                setScore((previous)=>{
                    if (previous-randomNumber < 0){
                        return 0
                    }
                    return
                })
            }
        }
        
        else{console.log("Select a number first")
        setShowError(true)}
        

    }

    const resetGame = () =>{
        setScore(0)
        setShowRules(false)
        setCurrentDice(1)
        setSelectedNumber(null)
    }

    return (
        <div className="p-10 flex flex-col w-screen gap-[100px]">
            <div className="flex w-full justify-between items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">{score}</h1>
                    <h2 className="text-xl font-semibold">Total Score</h2>
                </div>
                <div className={`${showError ? "p-4 text-white bg-[#dd3e3e] rounded-full" : "hidden"}`}>Select a Number first!!</div>
                <div className="flex gap-1">
                    {
                        [1, 2, 3, 4, 5, 6].map((item, i) => (
                            <h1

                                className={`text-xl border-[1px] border-black w-10 h-10 grid place-content-center hover:cursor-pointer ${selectedNumber === i + 1 && "text-white bg-black transition-all duration-2"}`} key={i}
                                onClick={() => {setSelectedNumber(item)
                                setShowError(false)}}
                            >{item}</h1>)
                        )
                    }
                </div>
            </div>

            <div className="flex flex-col items-center gap-3">
                <img src={diceImages[currentDice-1]} alt="dice" border="0" onClick={randomNumberGenerator} className="hover:cursor-pointer" />
                <h1 className="text-lg mb-[10px]">Click on the dice to roll</h1>
                <div className="font-mono font-semibold w-[134px] text-center py-1 border-[1px] rounded-lg border-black hover:cursor-pointer" onClick={resetGame}>Reset Game</div>
                <div className="font-mono font-semibold w-[134px] text-center py-1 bg-black text-white rounded-lg border-black hover:cursor-pointer" onClick={() => setShowRules(previous => !previous)}>{showRules ? "Hide" : "Show"} Rules</div>
                {showRules &&
                    <div className="bg-[#FBF1F1] flex flex-col gap-2 p-4 rounded-lg">
                        <h1 className="text-2xl font-bold">How to play dice game</h1>
                        <div>
                            <p>Select any number</p>
                            <p>Click on dice image</p>
                            <p>After click on  dice  if selected number is equal to dice number you will get same point as select number </p>
                            <p>If you get wrong guess then  selected number points will be dedcuted </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Game