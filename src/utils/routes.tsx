import App from "../views/App/App";
import Error from "../views/Error/Error";
import CountryView from "../views/CountryView/CountryView";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/:name",
    element: <CountryView />,
  },
]);
