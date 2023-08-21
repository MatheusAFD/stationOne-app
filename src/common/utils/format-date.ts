import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

function formatData(date: Date) {
  const createDate = new Date(date)
  const availableDateFormatted = format(
    createDate,
    "d 'de' MMM 'de' yyy 'ás' kk':'mm'h'",
    {
      locale: ptBR,
    },
  )

  return availableDateFormatted
}

export { formatData }
