import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'

import { Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
  const { user, signOut } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título' />

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