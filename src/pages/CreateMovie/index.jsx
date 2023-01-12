import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'

import { Container, Textarea } from './styles'

export function CreateMovie() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Link to='/'>
          <ButtonText title='Voltar' icon={FiArrowLeft} />
        </Link>

        <h1>Novo filme</h1>
        <div>
          <Input placeholder='Título' /><Input placeholder='Sua nota (de 0 a 5)' />
        </div>
        <Textarea placeholder='Observações' />
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
          <Button isDelete title='Excluir' />
          <Button title='Salvar alterações' />
        </div>
      </main>
    </Container>
  )
}