import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NavBar()
{
    return (
        <Fragment>
            <header>
            <nav>
                <ul>
                        <li>
                            <Link to="/">Home </Link>        
                        </li>
                        <li>
                            <Link to="/page1"> Page1 </Link>
                        </li>
                        <li>
                            <Link to="/page2"> Page2</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}