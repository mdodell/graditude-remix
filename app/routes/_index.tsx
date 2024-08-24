import type { MetaFunction } from "@remix-run/node";
import { LogoBlue } from "~/assets/LogoBlue";
import { Welcome } from "~/components/Welcome/Welcome";
export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Welcome />
      <LogoBlue />
    </div>
  );
}
