import { useGetOrderQueryQuery } from '../../../graphql/generated'

export function useGetOrder() {
  const email = localStorage.getItem('email')

  const { data } = useGetOrderQueryQuery({
    variables: {
      email,
    },
  })

  return { data }
}
