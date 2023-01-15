import { Box, Flex, Button, Stack, useColorMode, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        px={4}
        color="white"
        position="sticky"
        top="0"
        zIndex="101"
        bgColor="#4636c5"
        h="10vh"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/">
              <Text
                cursor="pointer"
                fontSize="3xl"
                fontStyle="italic"
                fontWeight="bold"
                _hover={{
                  fontSize: "4xl",
                }}
              >
                The Tee-Star
              </Text>
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} alignItems="center" spacing={7}>
              <Link to="/cart">
                <Text
                  fontSize="xl"
                  _hover={{ textDecor: "underline" }}
                  fontWeight="bold"
                >
                  Cart
                </Text>
              </Link>
              <Button variant="ghost" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
