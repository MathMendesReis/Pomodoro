import { Outlet } from "react-router";
import Header from "./components/Header";
import { LayoutContainer } from "./styles";

export default function DefaultLayouts() {
  return(
    <LayoutContainer>
      <Header/>
      <Outlet/>
    </LayoutContainer>
  )
}
