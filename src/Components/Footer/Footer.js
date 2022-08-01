import './Footer.css'

export default function Footer({ sectionSelected, filmData }) {

  console.log(filmData)
  let title = '';
  let posterURL = '';
  let time = '';
  let weekday = '';

  if (!sectionSelected) {
    title = filmData.title;
    posterURL = filmData.posterURL;
  } else if (sectionSelected) {
    title = filmData.movie.title
    posterURL = filmData.movie.posterURL
    time = filmData.name;
    weekday = filmData.day.weekday;
  }

  return (
    <footer>
      <div className='footer-poster'>
        <img src={posterURL} alt={title}></img>
      </div>
      <div className='footer-movie'>
        <p>{title}</p>
        {sectionSelected ? <p>{weekday} - {time}</p> : ''}
      </div>
    </footer>
  )
}