import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import Home from "../Components/Home/Home";
import DatePicker from "../Components/DatePicker/DatePicker";
import DataProvider from "../Provider/DataProvider";
import SecondaryLayout from "../layouts/SecondaryLayout/SecondaryLayout";
import Hotel from "../Components/Hotel/Hotel";
import ThirdLayout from "../layouts/ThirdLayout/ThirdLayout";
import Login from "../Components/Login/Login";
import Registar from "../Components/Registar/Registar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrimaryLayout></PrimaryLayout>,
        children: [
            {
                path: "/",
                element: <DataProvider><Home></Home></DataProvider>,
                loader: () => fetch('https://tarvel-guru-server-towhidulislam2023.vercel.app/destination')
            },
            {
                path: "/datePick",
                element: <DataProvider><DatePicker></DatePicker></DataProvider>,
            }
        ]
    },
    {
        path: "/hotel",
        element: <SecondaryLayout></SecondaryLayout>,
        children: [
            {
                path: "/hotel/:id",
                element: <PrivateRoute><Hotel></Hotel></PrivateRoute> ,
                loader: ({ params }) => fetch(`https://tarvel-guru-server-towhidulislam2023.vercel.app/hotel/${params.id}`)
            }
        ]
    },
    {
        path: "/authentication",
        element: <ThirdLayout></ThirdLayout>,
        children:[
            {
                path:"/authentication/login",
                element:<Login></Login>
            },
            {
                path:"/authentication/registar",
                element:<Registar></Registar>
            }
        ]
    }

]);
export default router