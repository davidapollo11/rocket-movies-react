import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input className='input' type='email' icon={FiMail} placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
          <Input className='input' type='password' icon={FiLock} placeholder='Senha' onChange={e => setPassword(e.target.value)} />
        </div>

        <Button title='Entrar' onClick={handleSignIn} />

        <Link to='/register'>Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}