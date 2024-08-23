import { Grid } from '@chakra-ui/react'
import { Stat } from '../../../Components'

export const Stats = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      px={{ base: 2, md: '90px' }}
      gap={10}
      mt={4}
    >
      <Stat
        total={80}
        title="Plihan CV"
        description="Dari CV Professional, ATS Friendly, dan Surat Lamaran Pekerjaan"
      />
      <Stat
        total={3}
        title="Paket Pilihan"
        description="Dari Paket Platinum sampai Paket Manapun yang sesuai dengan kantong kamu"
      />
      <Stat
        total={1001}
        title="Pelanggan Suka"
        description="Tujuan utama kami adalah kepuasan pelanggan"
      />
    </Grid>
  )
}
