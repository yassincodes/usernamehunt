import { Routes, Route} from "react-router-dom";
import Home from "./Home"
import UsernamesPage from "./usernamesPage"
function App() {

  return (
      <Routes>
        <Route path="/usernames" element={<UsernamesPage />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
