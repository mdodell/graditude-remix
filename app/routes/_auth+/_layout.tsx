import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <h1>Auth Layout</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
