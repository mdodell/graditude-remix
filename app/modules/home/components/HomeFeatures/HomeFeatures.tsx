import { forwardRef } from "react";
import { Center, Title, Text, Flex, Box, Image } from "@mantine/core";

import homeClasses from "../../styles/home.module.css";
import classes from "./HomeFeature.module.css";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
}

const features: Feature[] = [
  {
    title: "Beyond the 30-minute cold call.",
    description:
      "Meet a network of mentors that knows how to support you through your entire career journey, wherever it takes you.",
    imageSrc: "conversation.svg",
  },
  {
    title: "Activate networks clubs don’t know they have.",
    description:
      "The tech and expertise campus orgs need to expand student & alumni communities brought together by the life-changing impact of career mentorship.",
    imageSrc: "organization.svg",
  },
];

export const Feature = ({ title, description, imageSrc }: Feature) => (
  <Flex w="100%">
    <div>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </div>

    <Center>
      <Image src={imageSrc} width={200} height={200} alt={title} />
    </Center>
  </Flex>
);

export const HomeFeatures = forwardRef<HTMLDivElement>((__, ref) => (
  <>
    <Center>
      <Text className={homeClasses.subtitle}>Why Graditude</Text>
    </Center>

    <Box className={classes.root} ref={ref}>
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </Box>
  </>
));

HomeFeatures.displayName = "HomeFeatures";
