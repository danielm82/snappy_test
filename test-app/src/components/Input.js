import React, { Component } from 'react';
import '../css/Input.css';

class Input extends Component {
  render() {
    return (
      <div className="inputContainer">
        <span className="inputLabel">{this.props.label}:</span>
        <input type="text" onChange={e => this.props.onChange(e.target.value)}/>
        {this.props.error != '' && <div className="inputError">{this.props.error}</div>}
      </div>
    );
  }
}

export default Input;