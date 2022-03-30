import { Routes, Route} from "react-router-dom"
import Home from "./Home"
import UsernamesPage from "./usernamesPage"
import FavoriteList from "./FavoriteList"
import Extension from "./extension"
function App() {

  return (
      <Routes>
        <Route path="/usernames" element={<UsernamesPage />} />
        <Route path="/favorite" element={<FavoriteList />} />
        <Route path="/extension" element={<Extension />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
