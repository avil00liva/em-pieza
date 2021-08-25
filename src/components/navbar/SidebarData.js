import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"

export const SidebarData=[
    {
        title: "Inicio",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Consejos",
        path: "/consejos",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Ejercicios",
        path: "/ejercicios",
        icon: <BiIcons.BiSwim />,
        cName: "nav-text"
    },
    {
        title: "Noticias",
        path: "/noticias",
        icon: <IoIcons.IoIosPeople />,
        cName: "nav-text"
    },
    {
        title: "Tareas",
        path: "/tareas",
        icon: <FaIcons.FaTasks />,
        cName: "nav-text"
    },
]
