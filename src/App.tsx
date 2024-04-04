import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://www.oxygenatwork.com/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>You are using the VPN!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicking here increases the number: {count}
        </button>
        <p>
          This VPN will give you access to the internal applications, provided
          you can log into them.
        </p>
        <p>You should not be able to see this page without the VPN active.</p>
      </div>
      <p className="read-the-docs">
        Please confirm with your admin that it works for you
      </p>
    </>
  );
}

export default App;
