import styled from '@emotion/styled'

const SubTitle = styled.p`
  color: 'black;
`

export const SectionSubtitle = ({ label }: { label: string }) => {
  return <SubTitle className="text-base font-normal">{label}</SubTitle>
}
