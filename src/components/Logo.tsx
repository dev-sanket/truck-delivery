import type React from "react"
import { IonText } from "@ionic/react"
import "./Logo.css"
import logo from "../assets/images/logo_main.svg"

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo

