import LogoImage from '@/assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
type Props = {}

const ImageWrapper = styled('div')({
  textAlign: 'center',
  paddingTop: '7.5px',
  paddingBottom: '7.5px',
})

export const Logo: FC<Props> = () => {
  return (
    <ImageWrapper>
      <Link href="/">
        <Image
          src={LogoImage}
          style={{ width: '80%' }}
          className="attachment-large size-large"
          alt="logo"
          loading="lazy"
        />
      </Link>
    </ImageWrapper>
  )
}
