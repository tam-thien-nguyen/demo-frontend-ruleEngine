import { LayoutProps } from '@/models/common';
import { Box, Stack } from '@mui/material';
import { Footer } from '../common/ footer';
import { Header } from '../common/header';



export function MainLayout({children}: LayoutProps) {
  
    return (
      <Stack minHeight='100vh'>
        <Header/>

        <Box component='main' flexGrow={1} >
          {children}
        </Box>

        <Footer/>
      </Stack>
    )
}
