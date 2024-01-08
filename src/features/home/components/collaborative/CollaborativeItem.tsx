import {
  CollaborativeItemDetail,
  CollaborativeItemDetailType,
} from '@/features/home/components/collaborative/CollaborativeItemDetail'
import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import { FC, useState } from 'react'

export type CollaborativeItemType = {
  icon: any
  label: string
  desc: string
  items: CollaborativeItemDetailType[]
}

type Props = {
  data: CollaborativeItemType
  activeIndex?: number
}

export const CollaborativeItem: FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(undefined)
    } else {
      setActiveIndex(index)
    }
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop="-36px">
      <Lottie animationData={data.icon} style={{ width: '50%' }} />
      <Box width="100%" marginTop="24px">
        {data.items.map((item, index) => (
          <CollaborativeItemDetail
            data={item}
            key={item.name}
            index={index}
            activeIndex={activeIndex}
            toggleAnswer={toggleAnswer}
          />
        ))}
      </Box>
    </Box>
  )
}
