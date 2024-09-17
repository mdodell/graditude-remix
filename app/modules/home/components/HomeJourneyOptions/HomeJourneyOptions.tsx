import React, { forwardRef } from "react";
import {
  Button,
  Card,
  Stack,
  Text,
  Title,
  SimpleGrid,
  Center,
  MantineColor,
  Image,
} from "@mantine/core";
import homeClasses from "../../styles/home.module.css";

interface HomeJourneyCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  onButtonClick: () => void;
  color: MantineColor;
}

const HomeJourneyCard: React.FC<HomeJourneyCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  buttonText,
  onButtonClick,
  color,
}) => (
  <Card shadow="sm" padding="lg" radius="lg" bg={`${color}.0`}>
    <Title ta="center" order={3} mb="md">
      {title}
    </Title>
    <Center>
      <Image src={imageSrc} width={200} height={200} alt={imageAlt} />
    </Center>
    <Button color={color} fullWidth mt="md" radius="md" onClick={onButtonClick}>
      {buttonText}
    </Button>
  </Card>
);

export const HomeJourneyOptions = forwardRef<HTMLDivElement>((__, ref) => (
  <Stack align="center" px="md" ref={ref} mb="xl">
    <Text className={homeClasses.subtitle}>Where to begin</Text>
    <Title>
      Start your{" "}
      <Text
        span
        inherit
        variant="gradient"
        gradient={{ from: "blue", to: "violet", deg: 45 }}
      >
        personalized{" "}
      </Text>
      journey
    </Title>
    <SimpleGrid w="90%" cols={{ base: 1, lg: 3 }}>
      <HomeJourneyCard
        imageSrc="conversation.svg"
        imageAlt="Conversation"
        title="Do you want to be a mentor?"
        buttonText="Start quiz"
        onButtonClick={() => {}}
        color="violet"
      />
      <HomeJourneyCard
        imageSrc="student.svg"
        imageAlt="Student"
        title="Are you a mentor?"
        buttonText="Start quiz"
        onButtonClick={() => {}}
        color="cyan"
      />
      <HomeJourneyCard
        imageSrc="organization.svg"
        imageAlt="Organization"
        title="Join an organization"
        buttonText="Start quiz"
        onButtonClick={() => {}}
        color="grape"
      />
    </SimpleGrid>
  </Stack>
));

HomeJourneyOptions.displayName = "HomeJourneyOptions";
