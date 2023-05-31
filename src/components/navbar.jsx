import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import "../styles/navbar.css";
import { HamburgerIcon } from "@chakra-ui/icons";

function Nav({ small }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex align={"center"} justify={"space-evenly"} className="navBody">
        <MobNav isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Stack align={"center"}>
          <img
            src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png"
            alt=""
            srcset=""
          />
        </Stack>
        {small ? (
          <Flex
            fontWeight={"500"}
            align={"center"}
            gap={"25px"}
            p={"10px"}
            fontSize={"20px"}
          >
            <Text>Home</Text>
            <Text>Class</Text>
            <Text>About</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
            <Text
              fontWeight={"600"}
              color="white"
              bg="#49E9FF"
              p="12px 40px"
              borderRadius="40px"
            >
              Email Now
            </Text>
          </Flex>
        ) : (
          <HamburgerIcon onClick={onOpen} />
        )}
      </Flex>
    </>
  );
}
function MobNav({ isOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex
              direction={"column"}
              fontWeight={"500"}
              align={"center"}
              gap={"25px"}
              p={"10px"}
              fontSize={"20px"}
            >
              <Text>Home</Text>
              <Text>Class</Text>
              <Text>About</Text>
              <Text>Blog</Text>
              <Text>Contact</Text>
              <Text
                fontWeight={"600"}
                color="white"
                bg="#49E9FF"
                p="12px 40px"
                borderRadius="40px"
              >
                Email Now
              </Text>
            </Flex>
            <DrawerCloseButton
              pos={"fixed"}
              colorScheme="cyan"
              top="30px"
              right="18%"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Nav;
