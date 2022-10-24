


import { Box, Stack, Icon, Text,HStack } from '@chakra-ui/react';
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from '../icons/Icons';



function Feature(props) {
  const { icon, children } = props;
  return (
    <HStack  spacing='6'>
      <Icon as={icon} boxSize={['8','8','12']} />
      <Text  fontSize={["md",'md','lg']} fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
}

const Footer = (props) => {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='8' as='section'>
      <Stack  direction={['column','column','row' ]} px={['8','1','12']} spacing='5'>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guaranteee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for alll
        </Feature>
      </Stack>
    </Box>
  );
}
export default Footer;
