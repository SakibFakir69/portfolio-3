


//// 

import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../page/HomePage";
import { Contact } from "lucide-react";
import ContactPage from "../page/ContactPage";
import Project from "../page/Project";
import Skills from "../page/Skills";
import Experience from "../page/Experience";



export const route = createBrowserRouter([


    {
        path:'',
        element:<MainLayouts/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/contact',
                element:<ContactPage/>
            },
            {
                path:'/project',
                element:<Project/>
            },
            {
                path:'/skill',
                element:<Skills/>

            },
            {
                path:'/experince',
                element:<Experience/>
            }

        ]
    }


])