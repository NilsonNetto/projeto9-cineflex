import { BrowserRouter, Routes, Route } from "react-router-dom"
import './Assets/Reset.css'
import './Assets/Style.css'
import MainPage from './MainPage/MainPage.js'
import Sections from './Sections/Sections.js'
import Seats from './Seats/Seats.js'
import ConfirmationPage from './ConfirmationPage/ConfirmationPage.js'
import Header from './Header/Header.js'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}