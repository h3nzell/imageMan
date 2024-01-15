import { type FC, useRef } from 'react'

import { Button, UploadIcon } from 'components'

import type { TFileUploadProps } from './types'

const FileUpload: FC<TFileUploadProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleHiddenFileChange = () => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current.files[0]
      if (file) {
        onFileUpload(file)
      }
    }
  }

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleHiddenFileChange} ref={fileInputRef} className='hidden' />
      <Button className='max-w-36 w-full' LeftIcon={<UploadIcon color='#fff' size={24} />} onClick={handleUpload}>
        Upload
      </Button>
    </div>
  )
}

export default FileUpload
