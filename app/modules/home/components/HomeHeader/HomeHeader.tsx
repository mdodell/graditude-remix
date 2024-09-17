import {
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Divider,
  Drawer,
  Group,
  Stack,
  Transition,
  UnstyledButton,
} from "@mantine/core";

import { useMemo } from "react";
import classes from "./HomeHeader.module.css";
import { Link } from "@remix-run/react";
import { useWindowScroll } from "@mantine/hooks";
import { GraditudeLogo } from "~/components/GraditudeLogo";

const LoginButton = () => (
  <Button
    className={classes.loginButton}
    component={Link}
    radius="xl"
    variant="outline"
    to="/login"
  >
    Login
  </Button>
);

interface HomeHeaderProps {
  opened: boolean;
  onHamburgerClick: () => void;
  links: Array<{ label: string; onClick: () => void }>;
}

export function HomeHeader({
  opened,
  onHamburgerClick,
  links,
}: HomeHeaderProps) {
  const [scroll] = useWindowScroll();
  const items = useMemo(
    () =>
      links.map((link) => (
        <UnstyledButton
          component="a"
          key={link.label}
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            link.onClick();
          }}
        >
          {link.label}
        </UnstyledButton>
      )),
    [links]
  );

  return (
    <>
      <AppShell.Header className={classes.header} withBorder={scroll.y > 0}>
        <Group>
          <Burger
            opened={opened}
            onClick={onHamburgerClick}
            hiddenFrom="md"
            size="sm"
          />
          <GraditudeLogo path="/" />
          <Group visibleFrom="md">{items}</Group>
        </Group>
        <Group>
          <Box visibleFrom="sm">
            <LoginButton />
          </Box>
          <Button radius="xl" component={Link} to="register">
            Sign up
          </Button>
        </Group>
      </AppShell.Header>
      <Drawer
        component="nav"
        opened={opened}
        onClose={onHamburgerClick}
        withCloseButton={false}
        transitionProps={{
          duration: 200,
          transition: "fade",
        }}
        classNames={{ inner: classes.drawer, body: classes.drawerBody }}
        padding={0}
        hiddenFrom="md"
        keepMounted
      >
        <Stack h="100%">
          <Divider />
          <Box style={{ flexGrow: 1 }}>
            {links.map((link, index) => (
              <Transition
                key={link.label}
                mounted={opened}
                transition="slide-right"
                duration={150 + index * 50}
              >
                {(styles) => (
                  <UnstyledButton
                    style={styles}
                    className={classes.link}
                    onClick={() => {
                      link.onClick();
                      onHamburgerClick();
                    }}
                  >
                    {link.label}
                  </UnstyledButton>
                )}
              </Transition>
            ))}
          </Box>
          <Divider m={0} />
          <Center>
            <LoginButton />
          </Center>
        </Stack>
      </Drawer>
    </>
  );
}
