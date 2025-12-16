import { Box, Flex, Heading } from "@chakra-ui/react";
import { ColorModeToggle } from "./ui/color-mode";

export function Header() {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="chakra-body-bg"
      borderBottomWidth="1px"
      px={6}
      py={4}
    >
      <Flex align="center" justify="space-between">
        <Heading size="md">Recipe App</Heading>
        <ColorModeToggle />
      </Flex>
    </Box>
  );
}
