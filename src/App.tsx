import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Routes/Router'
import { client } from './common/lib/apollo'
import { AuthContextProvider } from './common/Context/AuthContext'

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AuthContextProvider>
            <Router />
          </AuthContextProvider>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
