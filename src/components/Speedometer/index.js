// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncreaseSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="SPEEDOMETER"
        />
        <h1 className="speed-text">
          Speed is <span>{count}</span> mph
        </h1>
        <p className="limit-text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            className="color-button"
            onClick={this.onIncreaseSpeed}
          >
            Accelerate
          </button>
          <button type="button" className="button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
