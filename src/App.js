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
            },
            {
              id: 7,
              name: "Your Meal",
              path: "/showYourMeal",
              component: 'mealResult'
            },
            {
            id: 8,
            name: "Payment",
            path: "/payment",
            component: 'payment'
            },
            {
              id: 9,
              name: "Check Out VnPay",
              path: "/checkOutVnPay/:fee",
              component: 'checkOutVnPay'
            },
             {
              id: 10,
              name: "Check Out MoMo",
              path: "/checkOutMoMo/:fee",
              component: 'checkOutMoMo'
            },
            {
              id: 11,
              name: "CheckOutSuccessVnPay",
              path: "/checkOutSuccessVnPay",
              component: 'checkOutSuccessVnPay'
            },
            {
              id: 12,
              name: "CheckOutSuccessMoMo",
              path: "/checkOutSuccessMoMo",
              component: 'checkOutSuccessMoMo'
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
                  <Route path='/updateMeal/:mealPlan_id' render={props =>
                      WrapperComponent(Body , "updateMealForm", {...props.match.params})
                    } />
                  <Route path="*">
                    {
                      WrapperComponent(Body, "errorPage")
                    }
                  </Route>
                </Switch>
              <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
