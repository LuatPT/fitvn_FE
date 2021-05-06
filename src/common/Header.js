import React from 'react'

class Header extends React.PureComponent{

    render(){
        var menus: Object[] = [
            {
                id: 1,
                name: "Login",
                path: "/login",
            },
             {
                id: 2,
                name: "Find meal",
                path: "/findMeal",
            },
            //  {
            //     id: 3,
            //     name: "Hire a PT",
            //     path: "/hirePT",
            // },
             {
                id: 4,
                name: "Excercise guide",
                path: "/findExercise",
            }, 
            {
                id: 5,
                name: "Caculator",
                path: "/caculator",
            },
            //  {
            //     id: 6,
            //     name: "About me",
            //     path: "/aboutMe",
            // }
        ];
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                {
                                    menus.map((ele,key) => 
                                        <li key={key} className="nav-item active">
                                            <a  className="nav-link" href={ele.path}>
                                                {ele.name} <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                    )
                                }   
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;