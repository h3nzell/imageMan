import type { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { PageLayout } from 'components'
import { store } from 'libraries/redux'
import ToastServices from 'libraries/toastify/toastServices'

const App: FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <PageLayout />

      <ToastServices />
    </Provider>
  </BrowserRouter>
)

export default App
