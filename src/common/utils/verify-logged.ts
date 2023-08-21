const isLoggedUser = localStorage.getItem('logged') === '1'

const userIsNotLogged = localStorage.getItem('logged') === null

function verifyLogged() {
  if (isLoggedUser) {
    return location.replace('/food')
  }
}

function verifyNotLogged() {
  if (userIsNotLogged) {
    return location.replace('/login')
  }
}

export { verifyLogged, verifyNotLogged }
