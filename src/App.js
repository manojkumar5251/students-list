import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./screens/Home"
import Header from "./components/Header"
import StudentDetails from "./screens/StudentDetails"

export default class App extends React.PureComponent {
  constructor(props) {
    super(props)
    let students = JSON.parse(localStorage.getItem("students"))
    if (!students?.length) {
      console.log("ckcm")
      students = [
        {
          name: "Jack Michel",
          class: "VII",
          section: "A",
          rollno: "10",
          marks: null,
          status: "None"
        },
        {
          name: "Tom Maverick",
          class: "XII",
          section: "C",
          rollno: "21",
          marks: null,
          status: "None"
        },
        {
          name: "Tommy",
          class: "V",
          section: "A",
          rollno: "1",
          marks: null,
          status: "None"
        },
        {
          name: "Jakie",
          class: "XII",
          section: "B",
          rollno: "1",
          marks: null,
          status: "None"
        },
        {
          name: "Jamie",
          class: "XI",
          section: "A",
          rollno: "20",
          marks: null,
          status: "None"
        }
      ]
      localStorage.setItem("students", JSON.stringify(students))
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/edit-details"
            render={props => <StudentDetails {...props} />}
          />
          <Route
            exact
            path="/add-students"
            render={props => <StudentDetails {...props} />}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
