


//// 

import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../page/HomePage";



export const route = createBrowserRouter([


    {
        path:'',
        element:<MainLayouts/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            }

        ]
    }


])