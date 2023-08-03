import { Outlet } from "react-router-dom";

export function DefaultLayouts() {
  return (
    <div>
      <header>header</header>
      <Outlet/>
    </div>
  )
}
