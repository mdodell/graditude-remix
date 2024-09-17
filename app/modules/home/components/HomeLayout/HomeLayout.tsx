import { AppShell } from "@mantine/core";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import { HomeFeatures } from "~/modules/home/components/HomeFeatures";
import { HomeFooter } from "~/modules/home/components/HomeFooter";
import { HomeHeader } from "~/modules/home/components/HomeHeader";
import { HomeJourneyOptions } from "~/modules/home/components/HomeJourneyOptions";
import { Jumbotron } from "~/modules/home/components/Jumbotron";

export function HomeLayout() {
  const [opened, { toggle }] = useDisclosure(false);
  const { scrollIntoView: scrollToJumbotron, targetRef: jumbotronRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 150 });
  const { scrollIntoView: scrollToAbout, targetRef: aboutRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });
  const { scrollIntoView: scrollToFeatures, targetRef: featuresRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 150 });

  return (
    <>
      <AppShell header={{ height: 100 }} zIndex={300}>
        <HomeHeader
          opened={opened}
          onHamburgerClick={toggle}
          links={[
            {
              label: "About",
              onClick: () => {
                scrollToJumbotron({ alignment: "end" });
              },
            },
            {
              label: "Why Graditude?",
              onClick: () => {
                scrollToAbout({ alignment: "start" });
              },
            },
            {
              label: "Features",
              onClick: () => {
                scrollToFeatures({ alignment: "start" });
              },
            },
          ]}
        />

        <AppShell.Main>
          <Jumbotron ref={jumbotronRef} />
          <HomeFeatures ref={aboutRef} />
          <HomeJourneyOptions ref={featuresRef} />
        </AppShell.Main>
        <HomeFooter />
      </AppShell>
    </>
  );
}
