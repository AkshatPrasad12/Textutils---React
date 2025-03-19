import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert]=useState(null)

  const showAlerts = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#061247'
      showAlerts("enabled dark mode","success")
      document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlerts("enabled light mode","success")
      document.title='TextUtils - Light Mode'
    }
  }
  // const colorMode=()=>{
  //   if(mode === 'light' || mode ==='dark')
  //   {
  //     setMode('primary')
  //   }
  //   else
  //   {
  //     setMode('light')
  //   }
  // }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutils" mode={mode} togglemode={toggleMode} />
    <Alerts alert={alert} />
    
    <div className="container">
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */}
          <TextForm showAlerts={showAlerts} heading="Enter The Box For Changing It In Different Format" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
    
    
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
