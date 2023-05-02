/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ListOfMovies ({ movies }) {
  return(
    <ul className="movies">
      {
        movies.map(movie => (
          <li className="movie" key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return(
    <>
      <p>{'No se encontraron películas para esta búsqueda.'}</p>
    </>
  )
}

export default function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return(
    hasMovies
    ? <ListOfMovies movies={movies}/>
    : <NoMoviesResults/>
  
  )
}