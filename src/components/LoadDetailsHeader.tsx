import type React from "react"
import "./StatusBar.css"
import { IonIcon } from "@ionic/react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const LoadDetailsHeader: React.FC = () => {
  return (
    <div className="load-details-header">
        <div className="backIcon">
         <ArrowBackIosIcon/>
        </div>
        <div className="load-details-title">
        Kharagpur - Jalpaiguri
        </div>


    </div>
  )
}

export default LoadDetailsHeader

