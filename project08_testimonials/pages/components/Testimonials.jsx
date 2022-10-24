import { Avatar, Box, Grid, Heading, HStack, Text, VStack, WrapItem } from '@chakra-ui/react'
import React from 'react'



const DATA =[
    {heading: "Efficent  Collaboraiting" , text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's     standard dummy text ever since the 1500s, when an unknown printer took ",
   image: "https://bit.ly/dan-abramov" , name:"jane Cooper" , job:'Ceo at ABC Corporation '},
   {heading: "Efficent  Collaboraiting" , text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's     standard dummy text ever since the 1500s, when an unknown printer took ",
   image: "https://bit.ly/dan-abramov" , name:"jane Cooper" , job:'Ceo at ABC Corporation '}, {heading: "Efficent  Collaboraiting" , text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's     standard dummy text ever since the 1500s, when an unknown printer took ",
   image: "https://bit.ly/dan-abramov" , name:"jane Cooper" , job:'Ceo at ABC Corporation '}
]

const Testimonials = () => {
  return (
   <Box bg="blue.50" textAlign="center" py='20' >

   <Box pb="30">
    <Heading>Our Clinet  Speak</Heading>
    <Text fontSize="20"> We can been working with Clinet around the world </Text>

</Box>
       <Grid  mx="auto"  maxW='90%'  templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']} gap="6"  >
          {DATA.map(({heading,text,image,name,job},index)=>(
       <Box key={index} >  
       <Box bg="white" px="10"   py="10" rounded="xl" shadow="2xl"> 

        <Heading>{heading}</Heading>
        <Text fontSize="20" py="6">
        {text}
</Text>
       </Box>
       <VStack py="10">     
         <Avatar  name='Dan Abrahmov' src={image} />
    <Heading>{name}</Heading>
        <Text> {job} </Text>
        </VStack>

       </Box>
     
    )  )}
       </Grid>

        
   </Box>
  )
}

export default Testimonials