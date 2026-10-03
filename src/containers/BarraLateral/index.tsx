import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={3} />
        <FiltroCard legenda="concluídas" contador={5} />
        <FiltroCard legenda="urgentes" contador={2} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={6} />
        <FiltroCard ativo legenda="todos" contador={20} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
