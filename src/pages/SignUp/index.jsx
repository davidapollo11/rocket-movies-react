import { Link } from 'react-router-dom'

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Background } from './styles'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input className='input' type='text' icon={FiUser} placeholder='Nome' />
          <Input className='input' type='email' icon={FiMail} placeholder='E-mail' />
          <Input className='input' type='password' icon={FiLock} placeholder='Senha' />
        </div>

        <Button title='Cadastrar' />

        <Link to='/'>
          <ButtonText className='toLogin' title='Voltar para o login' icon={FiArrowLeft} />
        </Link>
      </Form>

      <Background />
    </Container>
  )
}