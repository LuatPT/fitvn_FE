import React from 'react'
import { useLocation } from "react-router-dom";
import imgLogo from "../image/logogym.png";
import LogoutContainer from "../member/container/login/LogoutContainer";

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

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
            // {
            //     id: 5,
            //     name: "Create workout plan",
            //     path: "/exercisePlan",
            // },
            {
                id: 6,
                name: "Your meal plan",
                path: "/showYourMeal",
            }
            // ,{
            //     id: 7,
            //     name: "Payment",
            //     path: "/payment",
            // }

        ];

        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
        return (
            <div>
                <Box sx={{ flexGrow: 1,  height: 100 }}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Photos
                        </Typography>
                        <div style={{display:  localStorage.getItem('isLogin') ? 'block': 'none'}}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                                </IconButton>
                                <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                                </IconButton>
                                <IconButton  size="large" aria-label="account of current user" aria-controls="menu-appbar"
                                    aria-haspopup="true" onClick={handleMenu} color="inherit" >
                                    <AccountCircle />
                                </IconButton>
                                <p>{localStorage.getItem('isLogin')}</p>
                                <Menu id="menu-appbar" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>
                        </div>
                        </Toolbar>
                    </AppBar>
                    </Box>
                <nav className="navbar navbar-expand navbar-light bg-light">
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