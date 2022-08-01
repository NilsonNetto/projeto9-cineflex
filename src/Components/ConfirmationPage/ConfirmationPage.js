import { Link } from 'react-router-dom'
import { useState } from 'react';
import './ConfirmationPage.css'

export default function ConfirmationPage({ reserveName, reserveCPF, reserveSeatName, movieInfo, clearValues }) {

  return (
    <div className='main-confirmation-page'>
      <h2>Pedido feito com sucesso!</h2>
      <div className='movie-section'>
        <p className='title'>Filme e sessão</p>
        <p>{movieInfo.title}</p>
        <p>{movieInfo.date} {movieInfo.showtime}</p>
      </div>
      <div className='tickets'>
        <p className='title'>Ingressos</p>
        {reserveSeatName.map((seat) => <p key={seat.id}>Assento {seat.name}</p>)}
      </div>
      <div className='buyer'>
        <p className='title'>Comprador</p>
        <p>Nome: {reserveName}</p>
        <p>CPF: {reserveCPF}</p>
      </div>
      <Link to={'/'} onClick={clearValues}>Voltar para Home</Link>
    </div>
  )
}