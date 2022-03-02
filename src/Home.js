// how to sell drugs fast
// slick road story
// oil movie buy that fat guy
// limitless

// rhinestone eyes
// all my friends are toxic
// some say say you'll love me one day

import React, {useContext} from 'react'
import {usernamesContext} from "./usernamesContext"
import { Link } from "react-router-dom"
import HomeNav from "./HomeNav"

function Home() {
  const {firstName, lastName, setFirstName, setLastName, array, setUsernamesArray} = useContext(usernamesContext)
  
  function findUsername() {
    array[0] = {username: firstName + "io", inspiredFrom: "@levelsio"}
    array[1] = {username: "hey" + firstName, inspiredFrom: "@heyeaslo"}
    setUsernamesArray(array)
  }

  return (
    <div className="App">
      <HomeNav />
      <div className="main_section">
      <section className="write_name_section">
        <h2>great usernames from and for awesome influencers</h2>
        <form>
          <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}/>
          <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />
          <Link to="usernames" onClick={findUsername}>find username!</Link>
        </form>
      </section>
      </div>
    </div>
  );
}

export default Home;
