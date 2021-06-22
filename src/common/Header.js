import React from 'react'
import { useLocation } from "react-router-dom";
import imgLogo from "../image/logogym.png";
import LogoutContainer from "../member/container/login/LogoutContainer";

function Header (){
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
            },
            {
                id: 6,
                name: "Your meal plan",
                path: "/showYourMeal",
            }
            ,{
                id: 7,
                name: "Payment",
                path: "/payment",
            }

        ];
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className={currentPath === "/" ? "nav-item active": "nav-item"}>
                                    <a className="nav-link"  href="/">
                                        <img src={imgLogo} alt="Logo" style={{width: "32px"}}/>
                                    </a>
                            </li>
                                {
                                    menus.map((ele,key) =>
                                    <li key={key} className={currentPath === ele.path ? "nav-item active": "nav-item"} >
                                            <a className="nav-link" href={ele.path}>
                                               <span className="navText"> {ele.name}</span>
                                            </a>
                                    </li>
                                    )
                                }
                        </ul>
                        <ul className="navbar-nav">
                             <li className={currentPath === "/login" ? "nav-item active": "nav-item"}  id="logInSpan">
                                <a className="nav-link"  href="/login">
                                    <span className="navText"> Login</span>
                                </a>
                            </li>
                             <li className={currentPath === "/logout" ? "nav-item active": "nav-item"} id="logOutSpan">
                                <a className="nav-link"  href="/logout">
                                  <LogoutContainer />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
}
export default Header;