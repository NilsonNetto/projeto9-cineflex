import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Sections.css'

export default function Sections() {

  const [movieData, setMovieData] = useState({})
  const [movieSections, setMovieSections] = useState([]);

  const { idFilme } = useParams();

  useEffect(() => {

    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)

    promisse.then(res => {
      setMovieData(res.data)
      setMovieSections(res.data.days)
    })

  }, [])

  function Section({ weekday, date, showtimes }) {
    return (
      <div className='section'>
        <h3>{weekday} - {date}</h3>
        <div>
          {showtimes.map((time) => {
            return (<Link to={`/assentos/${time.id}`} key={time.id}> <p>{time.name}</p> </Link>)
          })}
        </div>
      </div >
    )
  }

  return (
    <>
      <div className='main-sections'>
        <h2>Selecione o horário</h2>
        <div className='sections'>
          {movieSections.map((section, index) => <Section key={index} weekday={section.weekday} date={section.date} showtimes={section.showtimes} />)}

        </div>
      </div>
      <Footer sectionSelected={false} filmData={movieData} />
    </>
  )
}