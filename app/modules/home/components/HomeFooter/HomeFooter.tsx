import { Container, Group } from "@mantine/core";
// import { GraditudeLogo } from '@/components/GraditudeLogo';
import classes from "./HomeFooter.module.css";
import { Link } from "~/components/Link/Link";
import { GraditudeLogo } from "~/components/GraditudeLogo";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

const items = links.map((link) => (
  <Link
    key={link.label}
    to={link.link}
    onClick={(event) => event.preventDefault()}
    size="sm"
    underline="never"
  >
    {link.label}
  </Link>
));

export function HomeFooter() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size="xl">
        <GraditudeLogo color="white" />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
