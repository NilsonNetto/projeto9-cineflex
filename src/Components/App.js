import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './Assets/reset.css'
import './Assets/style.css'
import Header from './Header/Header.js'
import MainPage from './MainPage/MainPage.js'
import Sections from './Sections/Sections.js'
import Seats from './Seats/Seats.js'
import ConfirmationPage from './ConfirmationPage/ConfirmationPage.js'



export default function App() {

  const [reserveName, setReserveName] = useState('');
  const [reserveCPF, setReserveCPF] = useState('');
  const [reserveSeatName, setReserveSeatName] = useState([])
  const [reserveSeatId, setReserveSeatId] = useState([])
  const [movieInfo, setMovieInfo] = useState([])

  function filterSeatId(selectedSeat, selected) {
    if (selected) {
      setReserveSeatId([...reserveSeatId, selectedSeat.id])
      setReserveSeatName([...reserveSeatName, { id: selectedSeat.id, name: selectedSeat.name }])
    } else {
      setReserveSeatId(reserveSeatId.filter(seat => !(seat === selectedSeat.id)))
      setReserveSeatName(reserveSeatName.filter(seat => !(seat.id === selectedSeat.id)))
    }
    console.log(reserveSeatName)
  }

  function clearValues() {
    setReserveName('');
    setReserveCPF('');
    setReserveSeatId([]);
    setReserveSeatName([]);
  }

  return (
    <BrowserRouter>
      <Header clearValues={clearValues} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sessoes/:idFilme' element={<Sections />} />
        <Route path='/assentos/:idSessao' element={<Seats reserveName={reserveName} reserveCPF={reserveCPF} reserveSeatId={reserveSeatId} setReserveName={setReserveName} setReserveCPF={setReserveCPF} filterSeatId={filterSeatId} setMovieInfo={setMovieInfo} />}></Route>
        <Route path='/sucesso' element={<ConfirmationPage reserveName={reserveName} reserveCPF={reserveCPF} reserveSeatName={reserveSeatName} movieInfo={movieInfo} clearValues={clearValues} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}