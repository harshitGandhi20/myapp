import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{ useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('warning');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='warning'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode Has Been Enabled","success");
      document.title="TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils now";
      // }, 1500);
    }
    else{
      setMode('warning');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode Has Been Enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }
  
  return (
  <>
      <Router>
  <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About />
         
          </Route>
          <Route exact path="/">
          <TextForm heading='Enter the Text to Analyze' showAlert={showAlert} mode={mode} />

          </Route>
        </Switch>
   </div>
        </Router>
  </>
  );
}

export default App;
