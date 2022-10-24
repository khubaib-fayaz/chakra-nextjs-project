import React from "react";
import {
  VStack,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} align="start">
      <VStack align="start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>

      <SimpleGrid columns={2} spacingY={6} spacingX={3}>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder="name" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="last name" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address/contact</FormLabel>
            <Input placeholder="enter your address/contact" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="city" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select option">
              <option value="pak">Pakistan</option>
              <option value="usa">United States Of America</option>
              <option value="uk">United Kingdom</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to the billing address</Checkbox>
        </GridItem>

        <GridItem colSpan={2}>
          <Button size="lg" w="full" variant="primary">
            Ship to the billing address
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
