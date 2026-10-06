import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: 'Urgente',
    status: 'Concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: 'Importante',
    status: 'Pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
