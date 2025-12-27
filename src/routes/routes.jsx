import Editor from "./Editor";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import RootLayout from "../RootLayout";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Editor />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "shop/:shopId",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
];

export default routes;