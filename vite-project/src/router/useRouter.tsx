import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/Main";
import DefaultLayouts from "../layouts/defaultLayout";
export default function useRouter() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <DefaultLayouts/>,
          children: [
            {
              path:"/",
              element: <Main />,
            }
          ]
        },
      ]);
      return [router];
}

