import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'

import { NextPageWithLayout } from '../models'

// Layout: khai bao 1 custom Layout. Custom Layout = NextPage + ten layout 
const Home: NextPageWithLayout = () => {

	return (
		<Box>
        	Payment Home page
		</Box>
	)
}

Home.Layout = MainLayout

export default Home