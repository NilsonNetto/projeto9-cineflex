import { BrowserRouter, Routes, Route } from "react-router-dom"
import './Assets/reset.css'
import './Assets/style.css'
import Header from './Header/Header.js'
import MainPage from './MainPage/MainPage.js'
import Sections from './Sections/Sections.js'
import Seats from './Seats/Seats.js'
import ConfirmationPage from './ConfirmationPage/ConfirmationPage.js'



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sessoes/:idFilme' element={<Sections />} />
        <Route path='/assentos/:idSessao' element={<Seats />}></Route>
        <Route path='/sucesso' element={<ConfirmationPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}