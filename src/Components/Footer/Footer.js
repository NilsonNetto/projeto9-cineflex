import './Footer.css'

export default function Footer({ sectionSelected, filmData }) {

  let title = '';
  let posterURL = '';
  let name = '';
  let weekday = '';

  if (!sectionSelected) {
    title = filmData.title;
    posterURL = filmData.posterURL;
  } else {
    title = filmData.movie.title;
    posterURL = filmData.movie.posterURL;
    name = filmData.name;
    weekday = filmData.day.weekday;
  }

  return (
    <footer>
      <div className='footer-poster'>
        <img src={posterURL} alt={title}></img>
      </div>
      <div className='footer-movie'>
        <p>{title}</p>
        {sectionSelected ? <p>{weekday} - {name}</p> : ''}
      </div>
    </footer>
  )
}