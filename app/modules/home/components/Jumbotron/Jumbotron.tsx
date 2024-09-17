import { forwardRef } from "react";
import {
  BackgroundImage,
  Grid,
  Title,
  Button,
  Text,
  Image,
} from "@mantine/core";

import classes from "./Jumbotron.module.css";
import homeClasses from "../../styles/home.module.css";

export const Jumbotron = forwardRef<HTMLDivElement>((__, ref) => (
  <div ref={ref}>
    <BackgroundImage src="jumbotron.png" className={classes.backgroundImage}>
      <Grid className={classes.backgroundImageInner}>
        <Grid.Col span={{ xs: 12, sm: 6 }} className={classes.jumbotronContent}>
          <div className={classes.jumbotronContentInner}>
            <Text className={homeClasses.subtitle}>
              A platform for organizations
            </Text>
            <Title>
              Growing together through{" "}
              <Text
                span
                inherit
                variant="gradient"
                gradient={{ from: "blue", to: "violet", deg: 45 }}
              >
                connections
              </Text>
            </Title>
            <Text>
              Elevate your Graditude journey by creating a dedicated space where
              you and your community can come together to foster positivity,
              growth, and connection.
            </Text>
            <Button radius="xl" mt="md">
              Create an organization
            </Button>
          </div>
        </Grid.Col>
        <Grid.Col span={6} visibleFrom="sm">
          <div className={classes.jumbotronImageContainer}>
            <Image src="./shared-goals.svg" alt="" />
          </div>
        </Grid.Col>
      </Grid>
    </BackgroundImage>
  </div>
));

Jumbotron.displayName = "Jumbotron";
