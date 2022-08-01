import { Link } from 'react-router-dom'
import BackButton from '../BackButton/BackButton'
import './Header.css'

export default function Header({ clearValues }) {

  return (
    <header>
      <BackButton />
      <Link to='/' onClick={clearValues}>
        CINEFLEX
      </Link>
    </header>
  )
}