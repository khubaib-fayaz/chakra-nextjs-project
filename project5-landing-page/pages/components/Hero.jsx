import {
    Box,
    Button,
    Flex,
    Heading,
    VStack,
    Text,
    Image,
    HStack
  } from '@chakra-ui/react';
  import { ChevronRightIcon } from '@chakra-ui/icons'

  

const Hero = () => {
  return (
    <Box as='section' mt="48">
    <Box
      maxW='1100px'
      margin='auto'
       
      overflow='hidden'
    >
      <Flex direction={['column-reverse', 'column-reverse', 'row']} color="green.500"  >
        <Box    mx={["18px", "18px",   "30"]} mt="8" textAlign={["center", "center" , "start"]}>
          <Heading   color="green.600" fontSize={['4xl']}  fontWeight='bold'>
          Build this rad landing page  from scratch
          </Heading>
          <Text mt='4' fontSize='xl' fontWeight='medium'>
              This is a Subheader section where you describe the basic benifits of your products   
          </Text>
          
          <Button  bg='green.500' color="white" size='md' w={['auto', '252px', '252px']} mt='6'  variant="">

          Create your account now <ChevronRightIcon/>
          </Button>
          <Text fontSize={['sm']} mt='4'>
            No credit Card required .
          </Text>
        </Box>

                      
   
         <VStack w="full" boxShadow="">
           <Image src='https://cdn.shopify.com/s/files/1/0110/8685/6292/products/Bouq-13-a_1800x1800.jpg?v=1548660338'
            boxSize={["72","96","96" ]} rounded="lg"     />
           </VStack>
      
      </Flex>

    </Box>
  </Box>
  )
}

export default Hero