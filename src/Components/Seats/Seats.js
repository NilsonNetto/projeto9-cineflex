import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Seats.css'

export default function Seats() {

  const { idSessao } = useParams();

  const [sectionSeats, setSectionSeats] = useState([])

  useEffect(() => {

    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

    promisse.then((res) => {
      setSectionSeats(res.data.seats)
    })


  }, [])

  return (
    <div className='main-seats'>
      <h2>Selecione o(s) assento(s)</h2>
      <div className='seats'>
        {sectionSeats.map((seat) => (
          seat.isAvailable ?
            (<div className='seat'> {seat.name} </div>) :
            (<div className='seat unavailable'>{seat.name}</div>)
        ))}
        <div className='seat selected'></div>
        <div className='seat'></div>
        <div className='seat unavailable'></div>
      </div>
      <div>
        <p>Nome do comprador:</p>
      </div>
      <div>
        <p>CPF do comprador:</p>
      </div>
      <button className='reserve'>Reservar assento(s)</button>
    </div>
  )
}