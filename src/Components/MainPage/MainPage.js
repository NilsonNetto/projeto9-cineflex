import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css'

export default function MainPage() {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const promisse = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')

    promisse.then(res => {
      setMoviesList(res.data)
    })

  }, [])

  function Film({ posterURL }) {
    return (
      <div className='film'>
        <img src={posterURL} alt={posterURL}></img>
      </div >
    )
  }

  return (
    <div className='main-initial-page'>
      <h2>Selecione o filme</h2>
      <div className='films'>
        {moviesList.map(({ id, posterURL }) => <Link to={`/sessoes/${id}`} key={id}> <Film posterURL={posterURL} /> </Link>)}
      </div>

    </div>
  )
}