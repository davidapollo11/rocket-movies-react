import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'

import { Container, Textarea } from './styles'

export function CreateMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState()
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleClear() {
    setTitle('')
    setRating('')
    setDescription('')
    setTags([])

    document.querySelectorAll('input').forEach(
      input => (input.value = '')
    )

    document.querySelectorAll('textarea').forEach(
      textarea => (textarea.value = '')
    )
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Adicione o nome do filme!')
    }

    if (!rating) {
      return alert('Dê uma nota ao filme!')
    }

    if (rating < 0 || rating > 5) {
      return alert('A nota do filme deve estar entre 0 e 5!')
    }

    if (newTag) {
      return alert('Há uma tag a ser adicionada, adicione-a ou esvazie o campo!')
    }

    if (tags.length == 0) {
      return alert('Você deve adicionar pelo menos uma tag')
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags
    })

    alert('Filme adicionado com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <ButtonText title='Voltar' icon={FiArrowLeft} onClick={handleBack} />

        <h1>Novo filme</h1>
        <div>
          <Input placeholder='Título' onChange={e => setTitle(e.target.value)} />
          <Input placeholder='Sua nota (de 0 a 5)' onChange={e => setRating(e.target.value)} />
        </div>
        <Textarea placeholder='Observações' onChange={e => setDescription(e.target.value)} />
        <Section title='Marcadores'>
          <div className='bookmarks'>
            {
              tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MovieItem
              isNew
              placeholder='Novo Marcador'
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>
        </Section>
        <div>
          <Button isDelete title='Limpar tudo' onClick={handleClear} />
          <Button title='Salvar alterações' onClick={handleNewNote} />
        </div>
      </main>
    </Container>
  )
}