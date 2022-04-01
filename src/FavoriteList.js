import {useEffect, useState, useContext} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import Modal from 'react-awesome-modal'

function FavoriteList() {
    const {setArrayNumber, setArrayUsername, arrayNumber, arrayUsername} = useContext(usernamesContext)
    const [visible, setVisible] = useState(false)
    const [number, setNumber] = useState()
    const [user, setUser] = useState()
    const [score, setScore] = useState(0)

    const [isPlus1, setIsPlus1] = useState(true)
    const [isPlus2, setIsPlus2] = useState(true)
    const [isPlus3, setIsPlus3] = useState(true)
    const [isPlus4, setIsPlus4] = useState(true)
    const [isPlus5, setIsPlus5] = useState(true)
    const [isPlus6, setIsPlus6] = useState(true)
    function calculate(n) {
        if (n == 1) {
            if (isPlus1) {
                setIsPlus1(false)
                setScore(score + 10)
            } else {
                setIsPlus1(true)
                setScore(score - 10)
            }
        } else if (n == 2) {
            if (isPlus2) {
                setIsPlus2(false)
                setScore(score + 5)
            } else {
                setIsPlus2(true) 
                setScore(score - 5)
            }
        } else if (n == 3) {
            if (isPlus3) {
                setIsPlus3(false)
                setScore(score + 5)
            } else {
                setIsPlus3(true)
                setScore(score - 5)
            }
        } else if (n == 4) {
            if (isPlus4) {
                setIsPlus4(false)
                setScore(score + 5)
            } else {
                setIsPlus4(true) 
                setScore(score - 5)
            }
        } else if (n == 5) {
            if (isPlus5) {
                setIsPlus5(false)
                setScore(score + 5)
            } else {
                setIsPlus5(true)
                setScore(score - 5)
            }
        } else if (n == 6) {
            if (isPlus6) {
                setIsPlus6(false)
                setScore(score + 5)
            } else {
                setIsPlus6(true)
                setScore(score - 5)
            }
        }
    }

    let filteredArrayUsername = []
    let filteredArrayNumber = []
    useEffect(() => {
        filteredArrayUsername = arrayUsername.filter(e => e.username !== user)
        filteredArrayNumber = arrayNumber.filter(e => e !== number)
        setArrayUsername(filteredArrayUsername)
        setArrayNumber(filteredArrayNumber)
        localStorage.setItem("arrayUsername", JSON.stringify(filteredArrayUsername))
        localStorage.setItem("arrayNumber", JSON.stringify(filteredArrayNumber))
    }, [number])

    function handleVisible() {
        setVisible(false)
        setScore(0)
        setIsPlus1(true)
        setIsPlus2(true)
        setIsPlus3(true)
        setIsPlus4(true) 
        setIsPlus5(true) 
        setIsPlus6(true)
    }

    const [hover, setHover] = useState(false)
    function handleHover(number) {
        if (number) {
            setHover(number)
        } else {
            setHover(false)
        }
    }

    // const arrayUsernameScores = [5,"-",10,10,"-"]
    // 
    return (
        <div>
            <HomeNav />
            <div>
                here is the favorite list
                {arrayUsername.map((username, key) => {
                    return ( 
                    <div key={key} className="favorite-box" >
                        <div className="favoriteList_username">
                            {username.username}
                            {
                            //<span style={{marginLeft: "10px", border: "1.5px solid black", borderRadius:"10px", padding:"5px"}}>{arrayUsernameScores[key]}</span>
                            }                      
                        </div>
                        <div style={{display:"flex"}}>
                            <p onClick={() => setUser(username.username)}>
                                <button onClick={() => setVisible(true)} className="favoriteList_button">
                                    calculate
                                </button>
                            </p>
                            <p onClick={() => setUser(username.username)}>
                                <button onClick={() => setNumber(username.key)} className="favoriteList_button">
                                    remove
                                </button>
                            </p>
                        </div>
                    </div>
                )})}
                <Modal visible={visible} width="400" heigth="1600" effect="fadeInDown" onClickAway={handleVisible}>
                    <div style={{padding:"1em"}} >
                        <div className="score_nav">
                            <p>{user}</p>
                            <p>score: {score}</p>
                        </div>
                        <div>
                        <p className="explaining">this is a calculator for usernames
                        know if your username is good enough by clicking the + buttons
                        each username will have a number</p>
                        </div>
                        <div>
                            <div className="calculator-row">
                                <p>easy to remember</p>
                                <button onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(false)} onClick={() => calculate(1)} className="calculator-row_plus" style={hover == 1 ? {transform:"scale(1.15)", border:"2px solid purple"} : (hover == 2 || hover == 3 || hover == 4 || hover == 5 || hover == 6) ? {transform:"scale(0.63)"} : {color: "black"}} >{isPlus1 ? "+ 10" : "- 10"}</button>
                            </div>
                            <div className="calculator-row">
                                <p>you can use it in all of your social media</p>
                                <button onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(false)} onClick={() => calculate(2)} className="calculator-row_plus" style={hover == 2 ? {transform:"scale(1.15)", border:"2px solid purple"} : (hover == 1 || hover == 3 || hover == 4 || hover == 5 || hover == 6) ? {transform:"scale(0.63)"} : {color: "black"}} >{isPlus2 ? "+ 5" : "- 5"}</button>
                            </div>
                            <div className="calculator-row">
                                <p>it represents who you are and your brand</p>
                                <button onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHover(false)} onClick={() => calculate(3)} className="calculator-row_plus" style={hover == 3 ? {transform:"scale(1.15)", border:"2px solid purple"} : (hover == 1 || hover == 2 || hover == 4 || hover == 5 || hover == 6) ? {transform:"scale(0.63)"} : {color: "black"}} >{isPlus3 ? "+ 5" : "- 5"}</button>
                            </div>
                            <div className="calculator-row">
                                <p>it represents who you are and your brand</p>
                                <button onMouseEnter={() => handleHover(4)} onMouseLeave={() => handleHover(false)} onClick={() => calculate(4)} className="calculator-row_plus" style={hover == 4 ? {transform:"scale(1.15)", border:"2px solid purple"} : (hover == 1 || hover == 2 || hover == 3 || hover == 5 || hover == 6) ? {transform:"scale(0.63)"} : {color: "black"}} >{isPlus4 ? "+ 5" : "- 5"}</button>
                            </div>
                            <div className="calculator-row">
                                <p>it represents who you are and your brand</p>
                                <button onMouseEnter={() => handleHover(5)} onMouseLeave={() => handleHover(false)} onClick={() => calculate(5)} className="calculator-row_plus" style={hover == 5 ? {transform:"scale(1.15)", border:"2px solid purple"} : (hover == 1 || hover == 2 || hover == 3 || hover == 4 || hover == 6) ? {transform:"scale(0.63)"} : {color: "black"}} >{isPlus5 ? "+ 5" : "- 5"}</button>
                            </div>
                            <div className="calculator-row">
                                <p>it represents who you are and your brand</p>
                                <button onMouseEnter={() => handleHover(6)} onMouseLeave={() => handleHover(false)} onClick={() => calculate(6)} className="calculator-row_plus" style={hover == 6 ? {transform:"scale(1.15)", border:"2px solid purple"} : (hover == 1 || hover == 2 || hover == 3 || hover == 4 || hover == 5) ? {transform:"scale(0.63)"} : {color: "black"}} >{isPlus6 ? "+ 5" : "- 5"}</button>
                            </div>
                        </div>
                        <button onClick={handleVisible} className="close">Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default FavoriteList