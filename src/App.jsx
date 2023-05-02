import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

function App() {

  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({search, sort})

  const debouncedGetMovies = useCallback(
    debounce(search => {
    console.log('search')
    getMovies(search)
  }, 300)
  ,[getMovies])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(search)
  }

  const handleSort = () => {
    setSort(newSort => !newSort)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
  
 
  return (
    <div className='App'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' type='text' placeholder='Avengers, Star Wars, Matrix...' value={search}/>
          <input type="checkbox" onChange={handleSort} checked={sort} name="" id="" />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>      
  )
}

export default App
