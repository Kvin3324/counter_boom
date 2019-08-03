import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  addPoint = () => {
    this.setState((state, props) => {
      return {
        number: state.number + 1
      }
    });
  }

  removePoint = () => {
    this.setState((state, props) => {
      return {
        number: state.number - 1
      }
    });
  }

  inputAddValue = () => {
    const inputAddNumberValue = document.getElementById("inputAddNumberValue");
      this.setState((state) => {
        return {
          number: state.number + parseInt(inputAddNumberValue.value)
        }
      })
  }

  inputRemoveValue = () => {
    this.setState((state) => {
      const inputRemoveNumberValue = document.getElementById("inputRemoveNumberValue");
      return {
        number:  state.number - parseInt(inputRemoveNumberValue.value)
      }
    })
  }

  render() {
    return (
      <div>
        <h1 className="counter--title mt-5 ml-5">Counter Boom !</h1>
        <div className="counter--number">
          <div className="number badge badge-secondary mr-5">
            <p className="number--value"> {this.state.number} </p>
          </div>
        </div>
        <div className="buttons--actions">
          <button className="btn btn-danger mr-4" onClick={this.addPoint}> Add 1 </button>
          <button className="btn btn-danger" onClick={this.removePoint}> Remove 1 </button>
        </div>
        <div className="input-number-value mt-5">
          <button className="add-number btn btn-primary mr-3" onClick={this.inputAddValue}> Add:</button>
          <input type="number" id="inputAddNumberValue" size="25"></input>
          <button className="remove--number btn btn-primary ml-5 mr-3" onClick={this.inputRemoveValue}> Remove:</button>
          <input type="number" id="inputRemoveNumberValue" size="25"></input>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);