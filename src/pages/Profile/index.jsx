import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title='Voltar' icon={FiArrowLeft} />
      </header>

      <Form>
        <Avatar>
          <img src='https://github.com/davidapollo11.png' alt='foto do usuário' />
          <label htmlFor='avatar'>
            <FiCamera />
            <input id='avatar' type='file' />
          </label>
        </Avatar>

        <Input placeholder='Nome' type='text' icon={FiUser} />
        <Input placeholder='E-mail' type='email' icon={FiMail} />
        <Input placeholder='Senha atual' type='password' icon={FiLock} />
        <Input placeholder='Nova senha' type='password' icon={FiLock} />

        <Button title='Salvar' />
      </Form>
    </Container>
  )
}