// my website got 6000 new clicks from a single person lol
// I think he is a big fan of elon musk
import { Link } from "react-router-dom"
function HomeNav() {
    return (
        <nav>
          <h2><Link to="/">usernameHunt</Link></h2>
          <p className="download_extension"><Link to="extension" style={{color:"white", textDecoration:"none"}}>download extension</Link></p>
        </nav>
    )
}

export default HomeNav