import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({ clearValues }) {
  return (
    <header>
      <Link to='/' onClick={clearValues}>
        CINEFLEX
      </Link>
    </header>
  )
}