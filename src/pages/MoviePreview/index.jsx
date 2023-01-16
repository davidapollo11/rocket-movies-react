import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'

import { FiArrowLeft, FiClock, FiTrash2 } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

import { Container } from './styles'

export function MoviePreview() {
  const [data, setData] = useState(null)

  const { user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate('/')
  }

  async function handleRemove() {
    const confirmDel = confirm('Tem certeza que deseja apagar a nota?')

    if (confirmDel) {
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])
  return (
    <Container>
      <Header />

      {data &&
        <main>
          <div className="buttons">
            <ButtonText title='Voltar' icon={FiArrowLeft} onClick={handleBack} />
            <ButtonText title='Excluir' icon={FiTrash2} onClick={handleRemove} />
          </div>

          <div>
            <h1>{data.title}</h1>
            <Stars rating={data.rating} />
          </div>

          <div>
            <img src={avatarUrl} alt={`Foto do usuário ${user.name}`} />
            Por {user.name}

            <FiClock /> {data.created_at}
          </div>

          <div>
            {
              data.tags && data.tags.map(tag => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))
            }
          </div>

          <p>{data.description}</p>
        </main>
      }
    </Container>
  )
}