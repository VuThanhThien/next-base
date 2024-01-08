import ADVFNLogo from '@/assets/images/ADVFNLogo.png'
import APNewsLogo from '@/assets/images/APNewsLogo.png'
import BloomerLogo from '@/assets/images/BloombergLogo.png'
import YahooLogo from '@/assets/images/YahooLogo.png'
import { CommentItem } from '@/features/home/components/comment/CommentItem'
import { Grid } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const CommentList: FC<Props> = () => {
  const CommentList = [
    {
      icon: BloomerLogo,
      name: 'Bloomberg',
      href: 'https://www.bloomberg.com/press-releases/2023-01-10/8seneca-releases-disrupting-it-outsourcing-model-for-businesses',
      description:
        '“8seneca provides companies  with highly competent  professionals with a  broad range of relevant  skills, while  allowing them  to retain  full control  over their products and intellectual property.”',
    },
    {
      icon: YahooLogo,
      name: 'Yahoo Fiance',
      href: 'https://sg.finance.yahoo.com/news/8seneca-releases-disrupting-outsourcing-model-105500043.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMCixb0YdGIS7hkaBaQzGuDjqbVpO3GNBpfF_D2b94BvW4jz2mD0hC4HteLdKjGB1igdeMllKhjhb-VSCnsySaXF4Jr_nY1gJflJgXgux0MShlofbiNaF-KJjQPcJI_HBS3U2Ydt5wpoZQ_sP8l59S9gIYMcLV4VW64Zjn1jnTUx',
      description:
        '“With 8seneca, you can expand your team capacity and delivery speeds," said CEO Tomas Bucek. "Extension in a software development project is a way to bring in more members to your existing team.“',
    },
    {
      icon: APNewsLogo,
      name: 'AP News',
      href: 'https://apnews.com/article/ce7aa25b455c7ec694ad29a6ad4fa524',
      description:
        '“By outsourcing IT monitoring services, a company’s IT manager doesn’t need to worry about business hours, vacation or downtime. Through round-the-clock monitoring and support services, 8seneca is responsible for ensuring there’s very little or no downtime."',
    },
    {
      icon: ADVFNLogo,
      name: 'ADVFN',
      href: 'https://www.advfn.com/stock-market/stock-news/89946300/8seneca-releases-disrupting-it-outsourcing-model-f',
      description:
        '“Hiring IT talent through 8Seneca reduces IT costs considerably. As the outsourced talent performs most of the routine and time-consuming regular tasks, the need for in-house hires is reduced."',
    },
  ]
  return (
    <div>
      <Grid container marginTop="0" spacing="4%">
        {CommentList.map(item => (
          <CommentItem item={item} key={item.name} />
        ))}
      </Grid>
    </div>
  )
}
