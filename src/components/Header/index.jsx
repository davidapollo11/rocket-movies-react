import { Link } from 'react-router-dom'

import { Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título' />

      <Profile>
        <div>
          <strong>David Apollo</strong>
          <button>sair</button>
        </div>

        <Link to='/profile'>
          <img src="https://github.com/davidapollo11.png" alt="Imagem do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}