import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = ({ ativo }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default FiltroCard
