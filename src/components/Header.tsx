"use client"
import type React from "react"
import Logo from "../components/Logo"
import BackButton from "../components/BackButton"
import '../pages/SignUp.css'
const Header: React.FC = () => {
  return (
    <div className="header">
    <BackButton />
    <Logo />
    <div></div>
    </div>
  )
}

export default Header
