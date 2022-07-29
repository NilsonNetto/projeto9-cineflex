import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

  function submitForm(e) {
    e.preventDefault();

  }

  return (
    <div className='main-seats'>
      <h2>Selecione o(s) assento(s)</h2>
      <div className='seats'>
        {sectionSeats.map((seat) => (
          seat.isAvailable ?
            (<div className='seat available'> {seat.name} </div>) :
            (<div className='seat unavailable'>{seat.name}</div>)
        ))}
        <div className='wrapper'>
          <div className='seat selected'></div>
          <p>Selecionado</p>
        </div>
        <div className='wrapper'>
          <div className='seat available'></div>
          <p>Disponível</p>
        </div>
        <div className='wrapper'>
          <div className='seat unavailable'></div>
          <p>Indisponível</p>
        </div>
      </div>
      <form onSubmit={submitForm}>
        <div>
          <p>Nome do comprador:</p>
          <input type='text' placeholder='Digite seu nome...' required></input>
        </div>
        <div>
          <p>CPF do comprador:</p>
          <input type='text' placeholder='Digite seu CPF...' required></input>
        </div>
        <Link to={'/sucesso'}> <button>Reservar assento(s)</button></Link>
      </form>
    </div>
  )
}