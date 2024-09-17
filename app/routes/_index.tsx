import { json, type MetaFunction } from "@remix-run/node";
import { HomeLayout } from "~/modules/home/components/HomeLayout";
import { createToastHeaders } from "~/utils/toast.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export const loader = async () => {
  const toastHeaders = await createToastHeaders({
    title: "Deleted",
    type: "error",
    description: "Your connection has been deleted.",
  });

  return json({ status: "success" } as const, { headers: toastHeaders });
};

export default function Index() {
  return (
    <div>
      <HomeLayout />
    </div>
  );
}
