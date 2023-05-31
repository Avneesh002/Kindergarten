import { Flex, Stack, Text } from "@chakra-ui/react";

function Welcome({ small }) {
  return (
    <>
      <Stack w="80%" m="auto" align={"center"} pt={"20px"}>
        <Flex
          align={"center"}
          direction={{ base: "column", lg: "row" }}
          fontSize={"35px"}
          lineHeight={"30px"}
          letterSpacing={"1px"}
          fontWeight={"extrabold"}
          gap="4px"
        >
          <Text color={"#423F8D"}>Welcome to our</Text>
          <Text color={"#F000A4"}>Kindergarten</Text>
        </Flex>
        <Text w={{ base: "80%", lg: "50%" }} color={"#423F8D"} align={"center"}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue fowl male signs.
        </Text>
      </Stack>

      <Flex
        mt={"100px"}
        direction={{ base: "column", lg: "row" }}
        align={{ base: "", lg: "center" }}
        justify={{ base: "", lg: "space-evenly" }}
      >
        <Stack>
          <Flex dir="column">
            <Flex pl="10%" mb={"20px"} gap={"20px"} justify={"center"}>
              <Flex>
                <img
                  src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg"
                  alt=""
                  srcset=""
                />
              </Flex>
              <Flex justify={"center"} direction={"column"}>
                <Text color="#423F8D" fontSize={"20px"} fontWeight={"600"}>
                  Inter School Sports
                </Text>
                <Text color="#423F8D" fontSize={"13px"}>
                  The words you use in your written communica speak volumes.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex dir="column">
            <Flex pl="10%" mb={"20px"} gap={"20px"} justify={"center"}>
              <Flex>
                <img
                  src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg"
                  alt=""
                  srcset=""
                />
              </Flex>
              <Flex justify={"center"} direction={"column"}>
                <Text color="yellow.500" fontSize={"20px"} fontWeight={"600"}>
                  Friendly Environment
                </Text>
                <Text color="#423F8D" fontSize={"13px"}>
                  The words you use in your written communica speak volumes.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex dir="column">
            <Flex pl="10%" mb={"20px"} gap={"20px"} justify={"center"}>
              <Flex>
                <img
                  src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg"
                  alt=""
                  srcset=""
                />
              </Flex>
              <Flex justify={"center"} direction={"column"}>
                <Text color="cyan" fontSize={"20px"} fontWeight={"600"}>
                  Inter School Sports
                </Text>
                <Text color="#423F8D" fontSize={"13px"}>
                  The words you use in your written communica speak volumes.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Stack>
        <Flex justify={"center"}>
          <img
            width="80%"
            src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png"
            alt=""
            srcset=""
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Welcome;
