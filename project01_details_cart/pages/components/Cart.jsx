import React from "react";
import {
  VStack,
  HStack,
  AspectRatio,
  Image,
  Heading,
  Text,
  Divider,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      align="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} align="start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>

      <HStack w="full" spacing={6}>
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jfif" alt="Skateboard" />
        </AspectRatio>

        <HStack justify="space-between" w="full">
          <VStack align="start">
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOM8790</Text>
          </VStack>

          <Heading size="sm">$119.00</Heading>
        </HStack>
      </HStack>
      <VStack w="full" align="stretch" spacing={4}>
        <HStack justify="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119</Heading>
        </HStack>
        <HStack justify="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justify="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justify="space-between">
          <Text color={secondaryTextColor}>Total (estimated)</Text>
          <Heading size="lg">$162.10</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
