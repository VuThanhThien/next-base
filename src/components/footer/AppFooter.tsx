import { CopyRightSection } from '@/components/footer/CopyRightSection'
import { FooterInfoSection } from '@/components/footer/FooterInfoSection'
import { theme } from '@/config/theme'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, Grid, Typography, styled } from '@mui/material'

const Wrapper = styled('div')(props => ({
  paddingTop: '5%',
  paddingLeft: '10%',
  paddingRight: '10%',
}))

const branches = [
  {
    country: 'SINGAPORE',
    location: [
      {
        city: 'HQ',
        addresses: [
          '8SENECA PTE. LTD.',
          'Reg. No. 202225113N10',
          'Anson Road #22-02',
          'International Plaza',
          'Singapore 079903',
        ],
      },
    ],
  },
  {
    country: 'UNITED KINGDOM',
    location: [
      {
        city: 'London',
        addresses: ['8SENECA LTD.', 'Reg. No. 1458538220', 'Wenlock Road 22', 'England, London N17GU'],
      },
    ],
  },
  {
    country: 'VIETNAM',
    location: [
      {
        city: 'Ho Chi Minh',
        addresses: [
          'CONG TY TNHH 8SENECA',
          'Reg. No. 0317546084',
          'Saigon Centre Tower 65',
          'Le Loi Ben Nghe Ward, District 1',
          'Ho Chi Minh 70000',
        ],
      },
      {
        city: 'Ha Noi',
        addresses: ['Conico Tower 4', 'Ton That Tung 4', 'Trung Tu Ward, District Dong Da', 'Hanoi 100000'],
      },
    ],
  },
  {
    country: 'SLOVAKIA',
    location: [{ city: 'Nitra', addresses: ['8SENECA s.r.o.', 'Reg. No. 55086446', 'Palanok 1', 'Nitra 94901'] }],
  },
]

export const AppFooter = () => {
  const isMobile = useIsMobile()

  return (
    <Wrapper style={isMobile ? { paddingBottom: 64 } : { paddingBottom: 0 }}>
      <Typography variant="h2" fontWeight="bold" color={theme.palette.primary.main} textAlign="center">
        Propelling Businesses to Success, One IT Solution at a Time
      </Typography>
      <br />
      <Typography
        variant="h4"
        fontWeight={theme.typography.fontWeightRegular}
        color={theme.palette.primary.main}
        marginBottom="5%"
        textAlign="center">
        Stay connected with us on our social media channels for latest updates and insights. For any queries or
        collaboration opportunities, reach out to us.
      </Typography>
      <Grid container spacing={{ xs: '16px', sm: '10%', md: '10%' }}>
        <Grid item xs={12} sm={4}>
          <FooterInfoSection />
        </Grid>
        <Branches />
      </Grid>
      <CopyRightSection />
    </Wrapper>
  )
}

const Branches = () => {
  return (
    <Grid item xs={12} sm={8}>
      <Grid
        container
        spacing={{ xs: '28px', sm: '2%', md: '2%' }}
        sx={{ flexDirection: { xs: 'column', sm: 'row', md: 'row' } }}>
        {branches.map(branch => (
          <Grid key={branch.country} item xs={6} sm={6} sx={{ display: 'flex', textAlign: 'left' }}>
            <Box>
              <Typography color="#EB1933" fontWeight="700" fontSize="14px">
                {branch.country}
              </Typography>
              {branch.location.map(item => (
                <Box key={item.city} component="div" marginTop="16px">
                  <Typography color="#181E54" fontWeight="700" fontSize="16px" marginBottom="16px">
                    {item.city}
                  </Typography>
                  {item.addresses.map(address => (
                    <Typography key={address} color="#181E54" fontWeight="400" fontSize="16px">
                      {address}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
