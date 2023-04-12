import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import SingUp from './component/SignUp';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import { useState } from 'react';

const App = (props) => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <NoteState>

        <Router>
          <Navbar />
          <div className="xyz">
          <Alert alert={alert} />
            <Header />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
                <Route eaxct path="/about" element={<About />}></Route>
                <Route eaxct path="/login" element={<Login showAlert={showAlert} />}></Route>
                <Route eaxct path="/signup" element={<SingUp showAlert={showAlert} />}></Route>
              </Routes>
            </div>
          </div>
        </Router>
      </NoteState>

    </>
  );
}

export default App;
