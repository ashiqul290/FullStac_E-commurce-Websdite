import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from '../Layout/Rootlayout';
import { Home } from '../page/Home';
import { Login } from "../page/Login";
import { AddProduct } from "../page/AddProduct";
import { AllProduct } from "../page/AllProduct";
import AddCategory from "../page/AddCategory";
import { AllCategory } from "../page/AllCategory";
import { AllUser } from "../page/AllUser";
import { AllMarchent } from "../page/AllMarchent";
import { Banner } from "../page/Banner";
import AllBanner from "../page/AllBanner";
import AllOrderList from "../page/AllOrders";
import NewOrders from "../page/NewOrders";
import PandingOrders from "../page/PandingOrders";

export const App = () => {

  let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "add-product", Component: AddProduct },
      { path: "all-product", Component: AllProduct },
      { path: "add-category", Component: AddCategory },
      { path: "all-category", Component: AllCategory },
      { path: "all-users", Component: AllUser },
      { path: "all-marchent", Component: AllMarchent },
      { path: "add-banner", Component: Banner },
      { path: "all-banners", Component: AllBanner },
      { path: "all-orders", Component: AllOrderList },
      { path: "new-orders", Component: NewOrders },
      { path: "panding-orders", Component: PandingOrders },
    ],
  },
  {
    path: "/login" , Component : Login
  }
]);

   return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
