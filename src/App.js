import React from 'react';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForms from './components/TextForms';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light")
  const [textMode, setTextMode] = useState("dark")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      sms: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setTextMode("light")
      document.body.style.backgroundColor = '#0d043e'
      showAlert('Enable dark mode', 'success')
      document.title = "TextUtils - Dark Mode"

    }
    else {
      setMode("light")
      setTextMode("dark")
      document.body.style.backgroundColor = 'white'
      showAlert('Enable light mode', 'success')
      document.title = "TextUtils - Light Mode"
    }

  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} textMode={textMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route  path="/about">
              <About mode={mode} />
            </Route>
            <Route  path="/">
              <TextForms showAlert={showAlert} heading={"Enter the text to analyze"} mode={mode} textMode={textMode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
