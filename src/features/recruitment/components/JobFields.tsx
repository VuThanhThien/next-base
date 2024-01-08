import DigitalMarketingIcon from '@/assets/images/DigitalMarketingIcon.png'
import GraphicIcon from '@/assets/images/GraphicIcon.png'
import ProgrammingIcon from '@/assets/images/ProgramTechIcon.png'
import SelectedDigitalMarketing from '@/assets/images/SelectedDigitalMarketing.png'
import SelectedGraphicDesign from '@/assets/images/SelectedGraphicDesign.png'
import SelectedProgramming from '@/assets/images/SelectedProgramming.png'
import { FieldItemType, JobFieldItem } from '@/features/recruitment/components/JobFieldItem'
import { Grid } from '@mui/material'
import { FC } from 'react'

type Props = {
  selectedItem: string
  onClick: (item: string) => void
}

export const jobFields: FieldItemType[] = [
  {
    name: 'Programming & Tech',
    slug: 'Programming%20%26%20Tech',
    inactiveIcon: ProgrammingIcon,
    activeIcon: SelectedProgramming,
  },
  {
    name: 'Graphic & Design',
    slug: 'Graphic%20%26%20Design',
    inactiveIcon: GraphicIcon,
    activeIcon: SelectedGraphicDesign,
  },
  {
    name: 'Digital Marketing',
    slug: 'Digital%20Marketing',
    inactiveIcon: DigitalMarketingIcon,
    activeIcon: SelectedDigitalMarketing,
  },
]

export const JobFields: FC<Props> = ({ onClick, selectedItem }) => {
  return (
    <Grid container spacing="40px" justifyContent="center" paddingTop="38px">
      {jobFields.map(item => (
        <Grid item xs={12} sm={12} md={4} key={item.name}>
          <JobFieldItem data={item} onClick={onClick} selectedItem={selectedItem} />
        </Grid>
      ))}
    </Grid>
  )
}
