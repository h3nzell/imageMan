import { toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import { ErrorIcon, InfoIcon, TickIcon, WarningIcon } from 'components'

import ToastTexts from './ToastTexts'
import { EToastVersions } from './types'

export { EToastVersions }

export const showNotification = (type: EToastVersions, title: string, description?: string) => {
  injectStyle()

  const toastContent = (color: string) => <ToastTexts color={color} title={title} description={description} />

  switch (type) {
    case EToastVersions.success:
      toast(toastContent('#47CB92'), {
        type: EToastVersions.success,
        icon: <TickIcon color='#47cb92' size={24} />,
      })
      break

    case EToastVersions.error:
      toast(toastContent('#F27D7D'), {
        type: EToastVersions.error,
        icon: <ErrorIcon color='#f27d7d' size={24} />,
      })
      break

    case EToastVersions.warning:
      toast(toastContent('#F0B774'), {
        type: EToastVersions.warning,
        icon: <WarningIcon color='#f0b774' size={24} />,
      })
      break

    case EToastVersions.info:
      toast(toastContent('#5C90DD'), {
        type: EToastVersions.info,
        icon: <InfoIcon color='#5c90dd' size={24} />,
      })
      break

    default:
      break
  }
}
