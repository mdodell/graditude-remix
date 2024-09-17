import { Anchor } from "@mantine/core";

import { Link as RemixLink } from "@remix-run/react";
export const Link = Anchor.withProps({
  component: RemixLink,
  to: "",
});
