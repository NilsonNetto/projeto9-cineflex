import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Sections.css'

export default function Sections() {

  const [movieSections, setMovieSections] = useState([]);

  const { idFilme } = useParams();

  useEffect(() => {

    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

    promisse.then(res => {
      setMovieSections(res.data.days)
    })

  }, [])


  function Section({ weekday, date, showtimes }) {
    return (
      <div className='section'>
        <h3>{weekday} - {date}</h3>
        {showtimes.map((time) => {
          return (<button>{time.name}</button>)
        })}
      </div>
    )
  }

  return (
    <div className='main'>
      <h2>Selecione o horário</h2>
      <div className='sections'>
        {movieSections.map((section, index) => <Section key={index} weekday={section.weekday} date={section.date} showtimes={section.showtimes} />)}

      </div>
    </div>
  )
}