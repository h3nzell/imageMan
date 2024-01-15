import type { FC } from 'react'
import { noop } from 'lodash'

import { formatDate } from 'utils'
import Button from 'components/Button'
import { CalendarIcon, CardClose, Text } from 'components'

import type { TCardProps } from './types'

const Card: FC<TCardProps> = ({ description = '', img = '', onDelete = noop, onEdit = noop, title = '' }) => (
  <div
    style={{ borderRadius: '43px' }}
    className='relative shadow-3xl max-w-[407px] w-full h-full flex-1 flex flex-col bg-white'
  >
    <CardClose onClick={onDelete} className='absolute top-[-10px] right-[-15px] cursor-pointer' />
    <img
      src={img}
      width='407'
      height='245'
      alt='Card image'
      className='object-cover h-60 '
      style={{ borderRadius: '43px 43px 0 0' }}
    />

    <div className='px-8 pt-7 pb-10 flex flex-col justify-between h-full'>
      <div>
        <Text text={title} className='font-bold text-lg mt-7' />
        <Text text={description} className='text-sm font-normal mt-4' />
        <div className='flex items-center gap-2 mt-6'>
          <CalendarIcon color='#B9B9B9' size={17} />
          <Text text={formatDate(new Date())} className='text-gray10 text-sm ' />
        </div>
      </div>

      <Button LeftIcon onClick={onEdit} className='mt-7'>
        EDIT
      </Button>
    </div>
  </div>
)

export default Card
