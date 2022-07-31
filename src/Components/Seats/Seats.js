import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Seat from '../Seat/Seat';
import './Seats.css'

export default function Seats({ reserveName, reserveCPF, reserveSeatId, setReserveName, setReserveCPF, filterSeatId, setMovieInfo }) {

  const { idSessao } = useParams();
  const navigate = useNavigate();
  const [sectionData, setSectionData] = useState({});
  const [sectionSeats, setSectionSeats] = useState([]);



  useEffect(() => {

    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)

    promisse.then((res) => {
      setSectionData(res.data)
      setSectionSeats(res.data.seats)
    })


  }, [])

  function reserveSeats(e) {
    e.preventDefault();

    setMovieInfo({
      title: sectionData.movie.title,
      date: sectionData.day.date,
      showtime: sectionData.name
    })

    const body = {
      ids: reserveSeatId,
      name: reserveName,
      cpf: reserveCPF
    }

    const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body);
    promise.then(() => {
      alert('Pedido reservado com sucesso!');
      navigate('/sucesso');
    })
    promise.catch(res => {
      alert('Houve um erro ao processar o seu pedido')
      navigate('/')
    })

  }

  return (
    <>
      <div className='main-seats'>
        <h2>Selecione o(s) assento(s)</h2>
        <div className='seats'>
          {sectionSeats.map((seat) => <Seat key={seat.id} seat={seat} filterSeatId={filterSeatId} />)
          }
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
        <form onSubmit={reserveSeats}>
          <div>
            <p>Nome do comprador:</p>
            <input type='text'
              placeholder='Digite seu nome...'
              onChange={(e) => setReserveName(e.target.value)}
              value={reserveName}
              required>

            </input>
          </div>
          <div>
            <p>CPF do comprador:</p>
            <input type='text'
              placeholder='Digite seu CPF...'
              onChange={(e) => setReserveCPF(e.target.value)}
              value={reserveCPF}
              pattern="([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
              required>
            </input>
          </div>
          <button>Reservar assento(s)</button>
        </form>

      </div>
      {/* <Footer sectionSelected={true} filmData={sectionData} /> */}
    </>
  )
}
