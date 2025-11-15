import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Routers from "./Components/Routers";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, Type) => {
    setAlert({
      msg: message,
      type: Type,
    });
    setTimeout(() => setAlert(null), 500);
  };
  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("DarkMode has beet Set", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("WhiteMode has beet Set", "success");
    }
  };

  useEffect(() => {
    console.log("ALERT", alert);
  }, [alert]);

  return (
    <>
      <Navbar title="WordCounter" mode={Mode} ToggleMode={ToggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routers mode={Mode} showalert={showalert} /> 
      </div>
    </>
  );
}

export default App;
