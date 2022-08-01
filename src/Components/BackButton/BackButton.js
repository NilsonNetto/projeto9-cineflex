import { useNavigate, useLocation } from "react-router-dom"
import './BackButton.css'

export default function BackButton() {

  let location = useLocation();
  let navigate = useNavigate();

  if (location.pathname === '/' || location.pathname === '/sucesso') {
    return '';
  } else {
    return (
      <div className='back-button'>
        <ion-icon name="arrow-back-circle" onClick={() => navigate(-1)}></ion-icon>
      </div>
    )
  }

}