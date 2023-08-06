import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/Main";
import DefaultLayouts from "../layouts/defaultLayout";
import Hystory from "../pages/Hystory";
export default function useRouter() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <DefaultLayouts/>,
          children: [
            {
              path:"/",
              element: <Main />,
            },
            {
              path:"/hystory",
              element: <Hystory />,
            }
          ]
        },
      ]);
      return [router];
}

