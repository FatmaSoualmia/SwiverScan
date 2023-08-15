import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <main className="my-5">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
