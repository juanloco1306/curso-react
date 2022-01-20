import React from 'react';
import './App.css';

/* function Helloworld(props) {
  return (
    <div id='hello'>
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
} */

class Helloworld extends React.Component{

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
    return (
      <div id='hello'>
      <h3>{this.props.subtitle}</h3>
      {this.props.mytext}
      <button onClick={this.toggleShow}>Cambiar el estado de show</button>
      </div>
    )
    } else {
      return <h1>There are not elements
        <button onClick={this.toggleShow}>
          Toggle Show
        </button>
      </h1>
    }
  }
}



function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Fazt" subtitle="lorem ipsum"/> 
      <Helloworld mytext="Hola Juan" subtitle="Gel antibacterial"/> 
      <Helloworld mytext="Eres una puta" subtitle="Alkapone"/> 
      </div>
  );
}

export default App;
