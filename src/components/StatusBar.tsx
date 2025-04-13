import type React from "react"
import "./StatusBar.css"
import moment from 'moment';
import signal from "../../src/assets/images/signal.png"
import FullBattery from "../../src/assets/images/FullBattery.png"
const StatusBar: React.FC = () => {
  const currentTime = moment().format('h:mm');
  return (
    <div className="status-bar">
      <div className="time">{currentTime}</div>
      <div className="signal-icons">
      <img src={signal} alt="phone" style={{ width: 13, height: 13 }} />
      <img src={FullBattery} alt="phone" style={{ width: 13, height: 13 }} />
      </div>
    </div>
  )
}

export default StatusBar

