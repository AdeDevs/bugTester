import { NavLink } from "react-router-dom";
import "../styles/home.css";
import Articles from "./articles";

function Home() {
  return (
    <div className="home">
      <main>
        <div className="boxes">
          <Articles />
        </div>

        <div className="side">
            <div>
                <h1>Recent</h1>
            </div>
            <div>
                <h1>Modified Posts</h1>
            </div>
            <div>
                <h1>Popular Posts</h1>
            </div>
            <div>
                <h1>Most Viewed</h1>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
