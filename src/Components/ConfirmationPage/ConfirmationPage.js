import { Link } from 'react-router-dom'
import './ConfirmationPage.css'

export default function ConfirmationPage() {
  return (
    <div className='main-confirmation-page'>
      <h2>Pedido feito com sucesso!</h2>
      <div className='movie-section'>
        <p className='title'>Filme e sessão</p>
        <p>Enola Holmes</p>
        <p>24/06/2022 15:00</p>
      </div>
      <div className='tickets'>
        <p className='title'>Ingressos</p>
        <p>Assentos 15</p>
        <p>Assentos 16</p>
      </div>
      <div className='buyer'>
        <p className='title'>Comprador</p>
        <p>Nome: João Silva Sauro</p>
        <p>CPF: 000.111.222-33</p>
      </div>
      <Link to={'/'}>Voltar para Home</Link>
    </div>
  )
}