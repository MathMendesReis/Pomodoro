import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/Main";
export default function useRouter() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main/>,
        },
      ]);
      return [router];
}

