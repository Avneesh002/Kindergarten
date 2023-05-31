import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Heading,
  Divider,
  Center,
} from "@chakra-ui/react";
function ClassesOffer() {
  return (
    <>
      <Stack mt={"20px"} bg="#FFF2F9" pb="40px">
        <Stack w="80%" m="auto" align={"center"} pt={"80px"}>
          <Flex
            align={"center"}
            direction={{ base: "column", lg: "row" }}
            fontSize={"35px"}
            lineHeight={"30px"}
            letterSpacing={"1px"}
            fontWeight={"extrabold"}
            gap="4px"
          >
            <Text color={"#423F8D"}>Classes We Offer</Text>
          </Flex>
          <Text
            w={{ base: "80%", lg: "50%" }}
            color={"#423F8D"}
            align={"center"}
          >
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue.
          </Text>
        </Stack>

        <Center>
          <SimpleGrid
            pt={{ base: "50px", lg: "100px" }}
            align="center"
            w={{ base: "95%", lg: "70%" }}
            spacing={"15px"}
            columns={{ base: 2, lg: 3 }}
          >
            <ClassCard
              img={
                "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png"
              }
            />
            <ClassCard
              img={
                "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png"
              }
            />
            <ClassCard
              img={
                "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img3.png"
              }
            />
          </SimpleGrid>
        </Center>
      </Stack>
    </>
  );
}

function ClassCard({ img }) {
  return (
    <Card
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      borderRadius={"20px"}
      maxW="xs"
    >
      <CardBody>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading color="#423F8D" size="md">
            Intelligent Challenge
          </Heading>
          <Text>
            The words you use in your written communica speak volumes.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justify={"center"}>
        <Flex align={"center"} gap={{ base: "25px", lg: "60px" }}>
          <Stack lineHeight={"10px"}>
            <Text color="#F000A4">3-5</Text>
            <Text fontSize={"13px"}>Age Group</Text>
          </Stack>
          <Stack lineHeight={"10px"}>
            <Text color={"yellow.600"}>30</Text>
            <Text fontSize={"13px"}>Classes</Text>
          </Stack>
          <Stack lineHeight={"10px"}>
            <Text color="cyan.600">10/h</Text>
            <Text fontSize={"13px"}>Class Price</Text>
          </Stack>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default ClassesOffer;
