// how to sell drugs fast
// slick road story
// oil movie buy that fat guy
// limitless

import {useState} from "react"

function App() {
  let array = []
  const [usernamesArray, setUsernamesArray] = useState(array)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function findUsername(e) {
    e.preventDefault()
    array[0] = {username: firstName + lastName, inspiredFrom: "simpleName"}
    array[1] = {username: firstName + "20s", inspiredFrom: "simpleName2"}
    setUsernamesArray(array)
  }

  return (
    <div className="App">
      <nav>
        <h1>usernameHunt</h1>
        <button className="download_extension">download extension</button>
      </nav>
      <div className="main_section">
      <section className="write_name_section">
        <h2>great usernames from and for awesome influencers</h2>
        <form>
          <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}/>
          <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />
          <button onClick={findUsername}>find username!</button>
        </form>
      </section>
      <section className="usernames">
        {usernamesArray.map((username) => {
          return <div>{username.username} {username.inspiredFrom}</div>
        })}
      </section>
      </div>
    </div>
  );
}

export default App;
