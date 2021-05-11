import './App.css';
import React from 'react';
import Footer from './common/Footer';
import Body from './common/Body';
import Header from './common/Header';
import WrapperComponent from './common/WrapperComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
       const menus= [
             {
                id: 1,
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
                id: 2,
                name: "Excercise guide",
                path: "/findExercise",
                component: 'excercise'
            },
            {
                id: 3,
                name: "Caculator",
                path: "/caculator",
                component: 'caculator'
            },
            {
              id: 4,
              name: "Login",
              path: "/login",
              component: 'login'
            },
            {
              id: 5,
              name: "Meal Plan",
              path: "/mealPlan",
              component: 'mealPlan'
            },
            {
              id: 6,
              name: "Workout Plan",
              path: "/exercisePlan",
              component: 'exercisePlan'
            }
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
