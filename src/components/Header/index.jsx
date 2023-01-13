import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useSearch } from '../../hooks/search'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'

import { Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
  const [pageHome, setPageHome] = useState(false)

  const { user, signOut } = useAuth()
  const { valueSearch } = useSearch()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function isPageHome() {
    if (window.location.pathname == '/') {
      setPageHome(true)
    }
  }

  useEffect(() => {
    isPageHome()
  }, [])

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input readOnly={!pageHome} placeholder='Pesquisar pelo título' onChange={e => valueSearch(e.target.value)} />

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