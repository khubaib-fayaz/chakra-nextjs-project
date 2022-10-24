import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FiClipboard, FiDollarSign, FiUser,AiOutlineCheck ,FiCheck} from "react-icons/fi";
const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

export const ConfirmSteps = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Flex flexDir="column" bg="gray" py="20"   >
      <Steps
      
        activeStep={activeStep}
        checkIcon={FiCheck}
        mx="20"
        w="90%"
      >
        {steps.map(({ label }, index) => (
          <Step label={label} key={label} icon={AiOutlineCheck} size="lg" >
            <HStack index={index} label={label} color='orange'  />
            <Text color="white" textAlign="center" fontSize="4xl" mx="30 " py="7" mt="10"  bg="whiteAlpha.300" borderRadius="lg" >Step {index} Contents </Text>
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={20} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex  justify="flex-end" mx="10" mt="6">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="md"
            variant="ghost"
            color="whiteAlpha.900"
          >
            Prev
          </Button>
          <Button size="md" px="10" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default ConfirmSteps;
