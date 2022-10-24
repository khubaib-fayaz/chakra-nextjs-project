import { Box, Heading ,Text} from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
     <Box as='section' color='white' bg="purple.600" pt="90px" pb="198px" px="8" textAlign="center" >
         <Heading fontSize={['3xl','3xl','5xl']} fontWeight="extrabold"  >Simple Pricing of your bussiness</Heading>
        <Text fontSize={['lg','lg','2xl']} fontWeight="medium" pt="4">Plans that are carefully crafted to suit your bussiness</Text>
     </Box>
  )
}

export default Header