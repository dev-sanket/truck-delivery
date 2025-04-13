import type React from "react"
import "./StatusBar.css"

const StatusBar: React.FC = () => {
  return (
    <div className="status-bar">
      <div className="time"></div>
      <div className="signal-icons">
        <span className="signal"></span>
      </div>
    </div>
  )
}

export default StatusBar

