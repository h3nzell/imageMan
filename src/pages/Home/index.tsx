import { useState, type FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { cardItemScheme } from 'utils'
import { useAppDispatch } from 'libraries/redux'
import { ICardItemsProps } from 'store/cardItems/types'
import { addCardItem, editCardItem } from 'store/cardItems'
import { EToastVersions, showNotification } from 'libraries'
import { Button, Modal, Text, FileUpload } from 'components'

import type { TFormValues } from './types'
import CardsContainer from './CardsContainer'

const HomeContainer: FC = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const [cardItemData, setCardItemData] = useState<ICardItemsProps>({ description: '', img: '', title: '', id: -1 })

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({ mode: 'onSubmit', resolver: yupResolver(cardItemScheme) })

  const handleModalOpen = () => {
    reset()
    setCardItemData({ description: '', img: '', title: '', id: -1 })
    setOpen(true)
  }

  const handleModalClose = () => {
    reset()
    setOpen(false)
    setIsEdit(false)
    setCardItemData({ description: '', img: '', title: '', id: -1 })
  }

  const handleFileUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file)
    setCardItemData(prev => ({ ...prev, img: imageUrl }))
  }

  const onSubmit = () => {
    dispatch(
      isEdit
        ? editCardItem({
            id: cardItemData.id,
            description: cardItemData.description,
            title: cardItemData.title,
            img: cardItemData.img,
          })
        : addCardItem({ description: cardItemData.description, title: cardItemData.title, img: cardItemData.img })
    )

    showNotification(EToastVersions.success, isEdit ? 'Changed successfully ' : 'Card Item Added Successfully')

    reset()
    setCardItemData({ description: '', img: '', title: '', id: -1 })
    setIsEdit(false)
    setOpen(false)
  }

  const onEditClick = (cardItem: ICardItemsProps) => {
    setIsEdit(true)
    setCardItemData({
      id: cardItem.id,
      img: cardItem.img,
      title: cardItem.title,
      description: cardItem.description,
    })
    setOpen(true)
  }

  return (
    <section>
      <CardsContainer onClick={handleModalOpen} onEdit={onEditClick} />

      <Modal onClose={handleModalClose} open={open}>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <label className='w-full flex text-gray40 font-semibold text-base flex-col gap-2' htmlFor='title'>
            Name
            <input
              type='text'
              {...register('title')}
              value={cardItemData.title}
              onChange={e => setCardItemData(prev => ({ ...prev, title: e.target.value }))}
              className={`w-full p-3  ${
                errors.title?.message ? 'outline-error' : 'outline-none'
              } rounded-3xl bg-gray30'`}
            />
            {errors.title?.message && (
              <Text tagName='span' text={String(errors.title.message)} className='block text-error' />
            )}
          </label>
          <label
            htmlFor='description'
            className={`text-gray40 focus:${
              errors.description?.message ? 'border-error' : 'border-none'
            } font-semibold text-base gap-2 flex flex-col`}
          >
            Description
            <textarea
              {...register('description')}
              value={cardItemData.description}
              className='bg-gray30 h-40 p-3 rounded-3xl resize-none'
              onChange={e => setCardItemData(prev => ({ ...prev, description: e.target.value }))}
            ></textarea>
            {errors?.description?.message && (
              <Text tagName='span' text={String(errors.description.message)} className='block text-error' />
            )}
          </label>

          {cardItemData.img ? (
            <div className='w-full flex items-center justify-between'>
              <div className='w-44 h-28'>
                <img className='rounded-3xl w-full h-full object-cover' src={cardItemData.img} alt='Uploaded' />
              </div>
              <Button type='submit'>Save</Button>
            </div>
          ) : (
            <FileUpload onFileUpload={handleFileUpload} />
          )}
        </form>
      </Modal>
    </section>
  )
}

export default HomeContainer
