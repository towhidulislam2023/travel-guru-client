import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrimaryLayout></PrimaryLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('https://tarvel-guru-server-towhidulislam2023.vercel.app/destination')
            }
        ]
    },
]);
export default router