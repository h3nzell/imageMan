import { ToastContainer } from 'react-toastify'

import { CloseIcon } from 'components'

const ToastServices = () => (
  <ToastContainer
    draggable
    rtl={false}
    theme='dark'
    pauseOnHover
    closeOnClick
    autoClose={3000}
    pauseOnFocusLoss
    newestOnTop={false}
    position='top-right'
    hideProgressBar={false}
    toastStyle={{
      alignItems: 'center',
      background: '#ffffff',
    }}
    closeButton={
      <>
        <CloseIcon color='#6B6B6B' size={24} />
      </>
    }
  />
)

export default ToastServices
