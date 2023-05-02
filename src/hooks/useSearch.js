
import { useState, useEffect, useRef } from 'react';

export default function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se ha ingresado nombre de la película')
      return
    }
    if (search.length < 3) {
      setError('Se deben ingresar como mínimo 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}