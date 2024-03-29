import PropTypes from 'prop-types'

import TwitterIcon from '@/assets/images/TwitterIcon.svg'

import Image from 'next/image'
import { DEFAULT_ICON_SIZE, adjustColorBrightness } from './utils'

const Twitter = (props: any) => {
  const size = `${props.size || DEFAULT_ICON_SIZE}`
  const url = `&url=${props.url || location.href}`
  const text = `&text=${props.text || document.title}`
  const hashtags = props.hashtags ? `&hashtags=${props.hashtags}` : ''
  const via = props.via ? `&via=${props.via}` : ''
  const related = props.related ? `&related=${props.related}` : ''
  const shareUrl = encodeURI(`https://twitter.com/intent/tweet/?${url}${text}${hashtags}${via}${related}`)

  const baseColor = props.color || '#1DA1F2',
    hoverColor = adjustColorBrightness(baseColor, -0.05),
    activeColor = adjustColorBrightness(baseColor, -0.2)

  return (
    <a
      href={shareUrl}
      title="Share on Twitter"
      target="popup"
      style={{ fontSize: size, color: baseColor }}
      onMouseOver={e => (e.currentTarget.style.color = hoverColor)}
      onMouseOut={e => (e.currentTarget.style.color = baseColor)}
      onMouseUp={e => (e.currentTarget.style.color = baseColor)}
      onMouseDown={e => (e.currentTarget.style.color = activeColor)}
      onFocus={e => (e.currentTarget.style.color = hoverColor)}
      onClick={function () {
        window.open(shareUrl, 'popup', 'width=480,height=240')
        return false
      }}>
      <Image src={TwitterIcon} width={0} height={0} alt="" />
    </a>
  )
}

Twitter.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  hashtags: PropTypes.string,
  via: PropTypes.string,
  related: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
}

export default Twitter
