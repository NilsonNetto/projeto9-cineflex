import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css'

export default function MainPage() {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

    promisse.then(res => {
      setMoviesList(res.data)
    })

  }, [])

  function Film({ posterURL }) {
    return (
      <div className='film'>
        <Link to='/section'>
          <img src={posterURL}></img>
        </Link>
      </div >
    )
  }

  return (
    <div className='main'>
      <h2>Selecione o filme</h2>
      <div className='films'>
        {moviesList.map(({ id, posterURL }) => <Film key={id} posterURL={posterURL} />)}
      </div>

    </div>
  )
}