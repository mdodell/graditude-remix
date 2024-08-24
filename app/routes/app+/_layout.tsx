import { Outlet } from "@remix-run/react";

export default function AppLayout() {
  return (
    <>
      <h1>AppLayout</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
