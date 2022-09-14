import "./styles.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [visible, setVisibility] = useState(true);

  function toggleTitle() {
    let h2 = document.querySelector("h2");
    if (visible) {
      h2.style.visibility = "hidden";
      setVisibility(false);
    } else {
      h2.style.visibility = "visible";
      setVisibility(true);
    }
  }

  return (
    <div className="App" className="d-flex justify-content-around m-3">
      <button onClick={toggleTitle} className="btn btn-info">
        Show/Hide
      </button>
      <h2>Welcome To React Challenges</h2>
    </div>
  );
}
