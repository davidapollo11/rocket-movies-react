import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useSearch } from '../../hooks/search'

import { api } from '../../services/api'

import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

import { Container } from './styles'

export function Home() {
  const [notes, setNotes] = useState([])
  const { textSearch } = useSearch()

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${textSearch}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [textSearch])
  return (
    <Container>
      <Header />
      <div className='title'>
        <h1>Meus filmes</h1>
        <Link to='/create'>
          <Button title='Adicionar filme' icon={FiPlus} />
        </Link>
      </div>

      <main>
        {
          notes.map(note => (
            <Movie key={note.id} data={note} />
          ))
        }
      </main>
    </Container>
  )
}