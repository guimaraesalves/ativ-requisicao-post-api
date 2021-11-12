import logo from "./logo.svg";
import "./App.css";

import { Toaster } from "react-router-toast";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tela de Login</h2>
        <Routes />
        <Toaster position="top-center" reverseOrder={false} />
      </header>
    </div>
  );
}

export default App;
