// making sure that the name contain only characters
     
// localStorage.setItem("arrayNumber", JSON.stringify([]))
// store the old array in a new array in a new array
// one search results | looking for usrnames
// one search saved: you'll find usernames of one specific search 
// writen like that yassin klifi
      
// making the list of usernames
// focus on lowering cases and uppering cases
// make different array + when u map the big one you will just concat them all
// before maping . you need to change the state to choose the type of array you want

// bugs to fix rn
// make user type in only proper names
// prevent default 
// fix warnings
import React, {useContext, useEffect} from "react"
import {usernamesContext} from "./usernamesContext"
import { Link } from "react-router-dom"

function HomeForm() {
    const {setArrayNumber, firstInput, secondInput, setFirstInput, setSecondInput, array, setUsernamesArray} = useContext(usernamesContext)
    let firstName = ''
    let secondName = ''

    function checkNames(first, second) {
      firstName = firstInput && first.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
      secondName = secondInput && second.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
        return (
            firstInput && secondInput && firstName.length <= 10 && firstName.length >= 2
            && secondName.length <= 10 && secondName.length >= 2
            && firstInput !== null && secondInput !== null
        ) 
    }

    function findUsername(firstInput, secondInput) { 
        firstName = firstInput && firstInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
        secondName = secondInput && secondInput.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
        array[0] = {key: 0, username: firstName + "io", inspiredFrom: "levelsio"}
        array[1] = {key: 1, username: "hey" + firstName, inspiredFrom: "heyeaslo"}
        array[2] = {key: 2, username: "aka" + firstName, inspiredFrom: "akaCurt"}
        array[3] = {key: 3, username: "sudo_" + firstName, inspiredFrom: "sudo_navendu"}
        array[4] = {key: 4, username: firstName + "_curious", inspiredFrom: "sajid_curious"}
        array[5] = {key: 5, username: firstName + "sIdeaShop", inspiredFrom: "MattsIdeaShop"}
        array[6] = {key: 6, username: "codingwith" + firstName, inspiredFrom: "codingwithmanny"}
        array[7] = {key: 7, username: firstName + "codes", inspiredFrom: "saminacodes"}
        array[8] = {key:8, username: "hello" + firstName + secondName, inspiredFrom: "hellobexnewton"}
        array[9] = {key:9, username: "marketing" + firstName, inspiredFrom: "MarketingMax"}
        array[10] = {key:10, username: "if" + firstName, inspiredFrom: "ifshiavo"}
        array[11] = {key:11, username: "ohnoits" + firstName, inspiredFrom: "ohnoitslungelo"}
        array[12] = {key:12, username: "with" + firstName, inspiredFrom: "withKhaled"}
        array[13] = {key:13, username: firstName + ".tiktok", inspiredFrom: "bayashi.tiktok"}
        array[14] = {key:14, username: firstName + "03" + secondName, inspiredFrom: "uday03meh"}
        array[15] = {key:15, username: "thisis" + firstName + secondName, inspiredFrom: "thisisbillgates"}
        array[16] = {key:16, username: "programWith" + firstName, inspiredFrom: "programWithErik"}
        array[17] = {key:17, username: firstName + "official", inspiredFrom: "bteminaofficial"}
        array[18] = {key:18, username: firstName + "DoesCoding", inspiredFrom: "SimonDoesCoding"}
        array[19] = {key:19, username: "thereal" + firstName, inspiredFrom: "therealcardib"}
        array[20] = {key:20, username: "Official" + firstName, inspiredFrom: "Officialholly"}
        array[21] = {key:21, username: "ux" + firstName, inspiredFrom: "uxblake"}
        array[22] = {key:22, username: firstName && (firstName.charAt(0).toUpperCase() + secondName.charAt(0).toUpperCase() + secondName.slice(1)) + "DEV", inspiredFrom: "DThompsonDev"}
        array[23] = {key:23, username: "its" + firstName + secondName ,inspiredFrom: "itsKevinChandra"}
        array[24] = {key:24, username: "codewith" + firstName, inspiredFrom: "codewithhajra"}
        array[25] = {key:25, username: "the" + firstName + (secondName && secondName.slice(0,2)), inspiredFrom: "themarcba" }
        array[26] = {key:26, username: firstName + "himself", inspiredFrom: "vadymhimself"}
        array[27] = {key:27, username: "pocket" + firstName, inspiredFrom: "pocketBryan"}
        array[28] = {key:28, username: firstName + "Stack", inspiredFrom: "VittoStack"}
        array[29] = {key:29, username: firstName + secondName + "TW", inspiredFrom: "KilianPoulinTW"}
        array[30] = {key:30, username: "coding" + firstName, inspiredFrom: "codingDoug"}
        array[31] = {key:31, username: firstName + "TV", inspiredFrom: "FarzaTV"}
        array[32] = {key:32, username: "The" + firstName + "io", inspiredFrom: "TheRickyio"}
        array[33] = {key:33, username: "meet" + firstName, inspiredFrom: "meetKevon"}
        array[34] = {key:34, username: secondName + "_", inspiredFrom: "lapatina_"}
        array[35] = {key:35, username: firstName + "_id", inspiredFrom: "aryya_id"}
        array[36] = {key:36, username: firstName + "waves", inspiredFrom: "marcowaves"}
        array[37] = {key:37, username: firstName + "tweets", inspiredFrom: "shannonlitweets"}
        array[38] = {key:38, username: "mynameis_" + secondName, inspiredFrom: "mynameis_davis"}
        array[39] = {key:39, username: firstName + "creates", inspiredFrom: "neidacreates"}
        array[40] = {key:40, username: firstName + "NFT", inspiredFrom: "sajadNFT"}
        array[41] = {key:41, username: firstName + "twts", inspiredFrom: "Unnati_twts"}
        array[42] = {key:42, username: (firstName && firstName.charAt(0)) + "_" + secondName, inspiredFrom: "J_Schiff"}
        array[43] = {key:43, username: "the" + (firstName && firstName.charAt(0)) + "lastName", inspiredFrom: "themsaid"}
        array[44] = {key:44, username: firstName + "33" + secondName, inspiredFrom: "Max33Verstappen"}
        array[45] = {key:45, username: firstName + "_makes", inspiredFrom: "johnny_makes"}
        array[46] = {key:46, username: (firstName && firstName.slice(0,2)) + "TheMaker", inspiredFrom: "AnTheMaker"}
        array[47] = {key:47, username: firstName + "x" + secondName, inspiredFrom: "emilyxlai"}
        array[48] = {key:48, username: "hello" + firstName + (secondName && secondName.charAt(0)), inspiredFrom: "HelloLuisJ"}
        array[49] = {key:49, username: firstName + secondName + "Says", inspiredFrom: "ScottAdamsSays"}
        array[50] = {key:50, username: "mi" + firstName, inspiredFrom: "mijustin"}
        array[51] = {key:51, username: "dev" + firstName ,inspiredFrom: "devpato"}
        array[52] = {key:52, username: firstName + "____" + secondName, inspiredFrom: "adarsh____gupta"}
        array[53] = {key:53, username: firstName + secondName + "blog", inspiredFrom: "davidwalshblog"}
        array[54] = {key:54, username: "real" + firstName + secondName, inspiredFrom: "realMeetKevin"}
        array[55] = {key:55, username: firstName + "CodesStuff", inspiredFrom: "KatyCodesStuff"}
        array[56] = {key:56, username: firstName + "coder", inspiredFrom: "pokecoder"}
        array[57] = {key:57, username: firstName + firstName + "Code", inspiredFrom: "DanDanCode"}
        array[58] = {key:58, username: "endingwith" + firstName, inspiredFrom: "endingwithali"}
        array[59] = {key:59, username: firstName + "SaaS", inspiredFrom: "JustinSaaS"}
        // array[19] = {key:19, username: "that_" + firstName, inspiredFrom: "that_oneblonde"}
        // mansoorcodes yosracodes
        // codinghorror
        // heyblake
        // @kvncnls
        // vikstack
        // ChristophM
        // @Aella_Girl
        // thisiszackyoung
        // miyassin
        // OfficialTravlad
        // heyOnuoha
        // hussien_coding
        setUsernamesArray(array)
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("secondName", secondName) 
        firstInput && setFirstInput(firstName)
        secondInput && setSecondInput(secondName)
    }  

    useEffect(() => {
        setFirstInput(localStorage.getItem("firstName"))
        setSecondInput(localStorage.getItem("secondName"))
        findUsername(localStorage.getItem("firstName"), localStorage.getItem("secondName"))
    }, [])

    function fixFindUsername(e) {
        e.preventDefault()
        setArrayNumber([])
    }

    return (
        <form>
            <input type="text" id="firstName" value={firstInput === null ? "" : firstInput} onChange={(e) => setFirstInput(e.target.value)}/>
            <input type="text" id="lastName"  value={secondInput === null ? "" : secondInput} onChange={(e) => setSecondInput(e.target.value)} />
            <button onClick={fixFindUsername}><Link to={checkNames(firstInput, secondInput) ? "/usernames" : "/"} id="findUsername" onClick={() => checkNames(firstInput, secondInput) ? findUsername(firstInput, secondInput) : alert("go fuck yourself")}>find username!</Link></button>
        </form>
    )
}

export default HomeForm