import { Box } from '@mui/material'
import React from 'react'

export interface HeaderMobile{}

export default function HeaderMobile(props: HeaderMobile) {
  return (
    <Box display={{xs: 'block', md:'none' }}>
        <div>header-mobile</div>
    </Box>
    
  )
}