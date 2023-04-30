import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import Home from "../Components/Home/Home";
import DatePicker from "../Components/DatePicker/DatePicker";
import DataProvider from "../Provider/DataProvider";
import SecondaryLayout from "../layouts/SecondaryLayout/SecondaryLayout";
import Hotel from "../Components/Hotel/Hotel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrimaryLayout></PrimaryLayout>,
        children:[
            {
                path:"/",
                element: <DataProvider><Home></Home></DataProvider>,
                loader: () => fetch('https://tarvel-guru-server-towhidulislam2023.vercel.app/destination')
            },
            {
                path:"/datePick",
                element: <DataProvider><DatePicker></DatePicker></DataProvider>,
            }
        ]
    },
    {
        path:"/hotel",
        element:<SecondaryLayout></SecondaryLayout>,
        children:[
            {
                path:"/hotel/:id",
                element:<Hotel></Hotel>,
                loader: ({params}) => fetch(`https://tarvel-guru-server-towhidulislam2023.vercel.app/hotel/${params.id}`)
            }
        ]
    }
]);
export default router