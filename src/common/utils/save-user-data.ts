import { GetUserByEmailQuery } from '../../graphql/generated'

function saveUserData({ userContent }: GetUserByEmailQuery) {
  localStorage.setItem('logged', '1')
  localStorage.setItem('name', userContent?.name as string)
  localStorage.setItem('phone', userContent?.phone as string)
  localStorage.setItem('email', userContent?.email as string)
  localStorage.setItem('avatarURL', userContent?.avatarURL as string)
}

export { saveUserData }
