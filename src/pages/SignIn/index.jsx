import { FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input className='input' type='email' icon={FiMail} placeholder='E-mail' />
          <Input className='input' type='password' icon={FiLock} placeholder='E-mail' />
        </div>

        <Button title='Entrar' />

        <a href="#">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}