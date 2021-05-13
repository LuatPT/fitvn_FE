import React from 'react'
import LogoutContainer from "../member/container/login/LogoutContainer";
import { useLocation  } from "react-router-dom";
function Header (props){
        let currentPath = useLocation().pathname;
        var menus= [
            {
                id: 1,
                name: "Find meal",
                path: "/findMeal",
            },
             {
                id: 2,
                name: "Excercise guide",
                path: "/findExercise",
            },
            {
                id: 3,
                name: "Caculator",
                path: "/caculator",
            },
             {
                id: 4,
                name: "Create meal plan",
                path: "/mealPlan",
            },
            {
                id: 5,
                name: "Create workout plan",
                path: "/exercisePlan",
            }
        ];
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                {
                                    menus.map((ele,key) =>
                                    <li key={key} className={currentPath === ele.path ? "nav-item active": "nav-item"}>
                                            <a  className="nav-link" href={ele.path}>
                                                {ele.name} <span className="sr-only">(current)</span>
                                            </a>
                                    </li>
                                    )
                                }
                        </ul>
                        <ul className="navbar-nav">
                            <li className={currentPath === "/login" ? "nav-item active": "nav-item"}>
                                <a className="nav-link"  href="/login">
                                    Login <span className="sr-only"></span>
                                </a>
                            </li>
                            <li className={currentPath === "/logout" ? "nav-item active": "nav-item"}>
                                <a className="nav-link" href="/logout">
                                        Logout <span className="sr-only"><LogoutContainer /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
}
export default Header;