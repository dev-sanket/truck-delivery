import type React from "react"
import { IonIcon } from "@ionic/react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from "react-router";
const LoadDetailsHeader: React.FC = () => {
  const history = useHistory<History>();
  const handleBack = () => {
    history.push('/search-loads'); // Replace with your desired route
  };
  return (
    <div className="load-details-header">
      <div className="backIcon" onClick={handleBack}>
        <ArrowBackIosIcon />
      </div>
      <div className="load-details-title">
        Kharagpur - Jalpaiguri
      </div>


    </div>
  )
}

export default LoadDetailsHeader

