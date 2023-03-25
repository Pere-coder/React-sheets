import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav class = "self-center bg-gray-900 shadow-lg flex justify-end w-full text-white p-10">
                        <ul class = "flex  gap-20">
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li >
                            <Link to="/contact">Contact</Link>
                        </li >

                        <li>
                            <Link to ="/test">Test</Link>
                        </li>
                        </ul>
                    
                
         </nav>

      <Outlet />

        </>
    )
}

export default Layout