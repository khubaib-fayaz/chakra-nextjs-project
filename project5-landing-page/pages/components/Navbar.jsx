import {
  Box,
  Flex,
  HStack,
  Center,
  Text,
  Image,
  IconButton,
  Button,
  Hide,
  Show,
  useDisclosure,
} from "@chakra-ui/react";


import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (


    <Box bg={["green.500" , "green.500" ,"green.500" , "white"]} pos="sticky" top={0} zIndex="sticky" >
    
      <HStack py={8} px={{ base: 5, lg: 10, xl: 20 }} justify="center" color={["white", "white", "white", "green.500"]}>
        <Flex w="full" justify="space-between">
        <Text fontWeight="bold" fontSize="20">LOGO</Text>
          <Hide below="lg">
            <HStack spacing={{ base: 5, md: 1, lg: 10, xl: 20 }} fontSize="md"   fontWeight={500}    >
              <Text>  Home  </Text>
              <Text>How it Word  </Text>
              <Text >Features</Text>
              <Text >Pricing</Text>
              <Button  size="sm"  color="white" bg="green.500" variant="" p="18px">Create Account </Button>
            </HStack>
          </Hide>

          <Show below="lg">
            <Center><IconButton onClick={onToggle} aria-label="Hamburger Icon"  variant="ghost" 
            _hover={{  bg: "transparent",  }}
                _focus={{ bg: "transparent" }}
                icon={
                  isOpen ? (
                    <CloseIcon w={4} h={4}  />
                  ) : (
                    <HamburgerIcon w={7} h={7} />
                  )
                }
              />
            </Center>
          </Show>
        </Flex>
      </HStack>

      {isOpen ?
       <Show below="lg"  >
      <HStack
       pos="fixed"
        width="full"
        fontSize="lg"
        px={5}
        pb={8}
        bg="green.500"
        color="white"
      >
      
<Flex justify="space-between" w="full" alignItems="center" flexDirection={["column","row" , "row"]} gap={6}>

          <Text >Home </Text>
          <Text>How it Works</Text>
          <Text >Features</Text>
          <Text >Pricing</Text>
          <Button
            size="sm"
            width={{ base: "180px", md: "180px" }}
            bg="white"
            variant=""
            color="green.500"
            p="18px  "
          >
            Get Started
          </Button>
</Flex>
      </HStack>
    </Show>: undefined}
    </Box>
  );
};

export default Navbar;
