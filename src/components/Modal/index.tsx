import { type FC, useRef } from 'react'

import { useLockBodyScroll, useOutsideClick } from 'hooks'

import { TModalProps } from './types'

const Modal: FC<TModalProps> = ({ open = false, children, onClose }) => {
  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick(ref, () => onClose())
  useLockBodyScroll(!open)

  if (!open) return null

  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 z-[10] px-4  w-screen h-screen bg-gray20 bg-opacity-20 flex justify-center items-center'>
      <div
        ref={ref}
        className='px-20 py-[75px] max-sm:px-7 max-sm:py-14 max-w-[802px] w-full bg-white rounded-[40px] flex flex-col z-50'
      >
        {children && children}
      </div>
    </div>
  )
}

export default Modal
