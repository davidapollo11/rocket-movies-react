import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useSearch } from '../../hooks/search'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'

import { Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
  const [textSearch, setTextSearch] = useState('')

  const { user, signOut } = useAuth()
  const { valueSearch } = useSearch()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleInput() {
    if (valueSearch) {
      return <Input placeholder='Pesquisar pelo título' onChange={e => setTextSearch(e.target.value)} />
    }
  }

  useEffect(() => {
    valueSearch(textSearch)
  }, [textSearch])

  return (
    <Container>
      <h1>RocketMovies</h1>
      {handleInput()}

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button onClick={signOut}>sair</button>
        </div>

        <Link to='/profile'>
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  )
}