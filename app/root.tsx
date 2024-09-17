import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Notifications } from "@mantine/notifications";
import { combineHeaders } from "~/utils/misc";
import { getToast } from "~/utils/toast.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useToast } from "~/hooks/useToast";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Notifications position="top-center" />
          {children}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { toast, headers: toastHeaders } = await getToast(request);

  return json(
    {
      toast,
    },
    {
      headers: combineHeaders(toastHeaders),
    }
  );
};

export default function App() {
  const data = useLoaderData<typeof loader>();

  useToast(data.toast);
  return <Outlet />;
}
