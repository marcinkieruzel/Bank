import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bank from './components/Bank'

const App = () => {
  return <div className="container">
    <Bank />
  </div>
}

ReactDOM.render(
    <App />,
    document.getElementById("app"));
