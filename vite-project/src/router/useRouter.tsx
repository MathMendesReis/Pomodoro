import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/Main";
function useRouter() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main/>,
        },
      ]);
      return [router];
}

export default useRouter