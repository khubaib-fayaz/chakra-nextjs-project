import { Image, VStack,Box, Text, Button,HStack,Hide, Flex, Center } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/Logo.png"
import { EmailIcon ,ChatIcon,PhoneIcon ,BellIcon} from '@chakra-ui/icons'
// import { MapPinIcon} from '@heroicons/react/20/mini'
import {MapPinIcon ,} from "@heroicons/react/20/solid"


const NavBar = () => {
  return (
 <Box bg="#571f9c " w="full"    py="3" color="white" fontSize={["12" , '12' , '16' , '16']}> 
 <Center>
   <Flex    gap="1" w="70%" justify={["center","center" ,'center' ,'space-between']} flexDirection={["column", "column", 'row']}  h>
  <Box textAlign='center' > <EmailIcon/> info@example.com</Box>

<Flex gap='5'  justify={["center","center" ,'center' ,'space-between']}  >
<Box > <ChatIcon/> Text</Box>
<Box> <PhoneIcon/> Contact</Box>
<Box> <BellIcon/> Alert</Box>
   
</Flex>

   </Flex>
   </Center>
 </Box>


    
  );
};



export default NavBar

