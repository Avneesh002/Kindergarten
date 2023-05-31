import React from "react";
import {
  Card,
  CardHeader,
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
const Teachers = ({ small }) => {
  return (
    <>
      <Stack>
        <Stack
          w={{ base: "80%", lg: "50%" }}
          m="auto"
          align={"center"}
          pt={"30px"}
        >
          <Flex
            align={"center"}
            direction={{ base: "column", lg: "row" }}
            fontSize={"35px"}
            lineHeight={"30px"}
            letterSpacing={"1px"}
            fontWeight={"extrabold"}
            gap="4px"
          >
            <Text color={"#423F8D"}>Expert Teachers</Text>
          </Flex>
          <Text color={"#423F8D"} align={"center"}>
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue.
          </Text>
        </Stack>

        <Center>
          <SimpleGrid
            pt={{ base: "50px", lg: "50px" }}
            align="center"
            w={{ base: "95%", lg: "70%" }}
            spacing={"15px"}
            columns={{ base: 2, lg: 3 }}
          >
            <ClassCard
              img={
                "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png"
              }
              name={"Mr. Jacson Clay"}
              work="Sports Instructor"
            />
            <ClassCard
              img={
                "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png"
              }
              name={"Buster Hyman"}
              work="Sports Instructor"
            />
            <ClassCard
              img={
                "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png"
              }
              name={"Amilia Clay"}
              work="Sports Instructor"
            />
          </SimpleGrid>
        </Center>
      </Stack>
    </>
  );
};

function ClassCard({ img, name, work }) {
  return (
    <Card boxShadow="0px 0px 0px transparent" borderRadius={"20px"} maxW="xs">
      <CardBody>
        <Image
          height="280px"
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="0">
          <Text color="#423F8D" fontSize="20px">
            {name}
          </Text>
          <Text fontSize="15px">{work}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Teachers;
