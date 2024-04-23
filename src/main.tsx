import React from "react";
import ReactDOM from "react-dom/client";
import { setupStore } from "./utils/store.ts";
import { Provider } from "react-redux";
import { router } from "./utils/routes.tsx";
import { RouterProvider } from "react-router-dom";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
