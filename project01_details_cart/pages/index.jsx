
import { Container, Flex } from "@chakra-ui/react";

import { Details,Cart } from "./components";
const Home = () => {
  return (
    <Container maxW="container.xl" padding={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={{ base: 0, sm: 10, md: 20 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};
  
export default Home;
