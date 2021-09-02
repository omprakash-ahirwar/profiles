import React, { Component } from 'react';
import logo from './logo.svg';
import NameForm from './NameForm.js';
import './App.css';
class App extends Component{
	
	 onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    //getBase64(file);
  }
render(){
	  return (
		<div className="App">
		  <h1>Hello World!</h1>
		  <NameForm />
		</div>
		
	  );
	}
}

export default App;
