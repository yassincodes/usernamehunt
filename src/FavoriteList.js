import {useEffect, useState, useContext} from "react"
import {usernamesContext} from "./usernamesContext"
import HomeNav from "./HomeNav"
import uuid from "react-uuid"
import Modal from 'react-awesome-modal';
import { isVisible } from "@testing-library/user-event/dist/utils";
// refugeejobsbord

function FavoriteList() {
    const {setArrayNumber, setArrayUsername, arrayNumber, arrayUsername} = useContext(usernamesContext)
    const [visible, setVisible] = useState(false)
    const [number, setNumber] = useState()
    const [user, setUser] = useState()
    const [score, setScore] = useState(0)

    const [isPlus1, setIsPlus1] = useState(true)
    const [isPlus2, setIsPlus2] = useState(true)
    const [isPlus3, setIsPlus3] = useState(true)
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
        } else if (n ==3) {
            if (isPlus3) {
                setIsPlus3(false)
                setScore(score + 5)
            } else {
                setIsPlus3(true)
                setScore(score - 5)
            }
        }
    }

    let filteredArrayUsername = []
    let filteredArrayNumber = []
    useEffect(() => {
        // console.log(arrayNumber.indexOf(number))
        console.log(user)
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
    }

    return (
        <div>
            <HomeNav />
            <div>
                here is the favorite list
                {arrayUsername.map((username, key) => {
                    return ( 
                    <div key={uuid()}>
                        {username.username}
                        <p onClick={() => setUser(username.username)}>
                            <button onClick={() => setNumber(username.key)}>
                                remove
                            </button>
                        </p>
                        <p onClick={() => setUser(username.username)}>
                            <button onClick={() => setVisible(true)}>
                                calculate
                            </button>
                        </p>
                    </div>
                )})}
                <Modal visible={visible} width="400" heigth="1600" effect="fadeInDown"  onClickAway={handleVisible}>
                    <div>
                        <div className="score_nav">
                            <h3>{user}</h3>
                            <h3>score: {score}</h3>
                        </div>
                        <div>
                        <p>this is a calculator for usernames
                        know if your username is good enough by clicking the + buttons
                        each username will have a number</p>
                        </div>
                        <div>
                            <div className="calculator-row">
                                <p>easy to remember</p>
                                <button onClick={() => calculate(1)} className="calculator-row_plus">{isPlus1 ? "+10" : "-10"}</button>
                            </div>
                            <div className="calculator-row">
                                <p>you can use it in all of your social media</p>
                                <button onClick={() => calculate(2)} className="calculator-row_plus">{isPlus2 ? "+5" : "-5"}</button>
                            </div>
                            <div className="calculator-row">
                                <p>it represents who you are and your brand</p>
                                <button onClick={() => calculate(3)} className="calculator-row_plus">{isPlus3 ? "+5" : "-5"}</button>
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