import type { FC } from 'react'
import { noop } from 'lodash'
import classNames from 'classnames'

import { removeCardItem } from 'store/cardItems'
import { AddIcon, Button, Card } from 'components'
import { EToastVersions, showNotification } from 'libraries'
import { CardItemsSelectors } from 'store/cardItems/selectors'
import { useAppDispatch, useAppSelector } from 'libraries/redux'

import type { TCardsContainerProps } from './types'

const CardsContainer: FC<TCardsContainerProps> = ({ onEdit = noop, onClick = noop }) => {
  const cardItems = useAppSelector(CardItemsSelectors.getCardItems)

  const dispatch = useAppDispatch()

  const onDeleteItemClick = (id: number) => {
    dispatch(removeCardItem(id))
    showNotification(EToastVersions.success, 'Card item has been removed')
  }

  return (
    <div className='w-full grid place-items-center max-h-[calc(100vh-320px)] max-md:max-h-none px-4 mr-[-16px] gap-4 grid-template-columns overflow-y-auto pb-6'>
      {cardItems?.map(element => (
        <Card
          key={element.id}
          img={element.img}
          title={element.title}
          description={element.description}
          onEdit={() => onEdit(element)}
          onDelete={() => onDeleteItemClick(element.id!)}
        />
      ))}
      <Button
        className={classNames(
          `max-w-[407px] w-full min-h-96 ${
            cardItems?.length ? 'h-full' : 'h-96'
          } !bg-gradient-to-br !from-green-500 !via-green-300`
        )}
        onClick={onClick}
        LeftIcon={<AddIcon color='#ffffff' size={107} />}
      />
    </div>
  )
}

export default CardsContainer
