import './App.css';
import React from 'react';
import Footer from './common/Footer';
import Body from './common/Body';
import Header from './common/Header';
import WrapperComponent from './common/WrapperComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
       const menus: Object[] = [
            {
                id: 1,
                name: "Login",
                path: "/login",
                component: 'login'
            },
             {
                id: 2,
                name: "Find meal",
                path: "/findMeal",
                component: 'food'
            },
            //  {
            //     id: 3,
            //     name: "Hire a PT",
            //     path: "/hirePT",
            //     component: 'excercise'
            // },
             {
                id: 4,
                name: "Excercise guide",
                path: "/findExercise",
                component: 'excercise'
            }, 
            {
                id: 5,
                name: "Caculator",
                path: "/caculator",
                component: 'caculator'
            },
            //  {
            //     id: 6,
            //     name: "About me",
            //     path: "/aboutMe",
            //     component: 'excercise'
            // }
        ];
        return (
        <Router>
          <div className="App">
          <Header />
              <Switch>
                
                {
                  menus.map((ele,key) =>
                    {
                      
                      let typeComponent = ele.component;
                      return(
                        <Route key={key} path={ele.path}>
                          {
                            WrapperComponent(Body, typeComponent)
                          }
                        </Route>

                      )
                    })
                }
              </Switch>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
