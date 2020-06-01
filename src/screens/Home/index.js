import React from "react"
import { Container, Table } from "react-bootstrap"
export default class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { students: [] }
  }
  componentDidMount() {
    this.fetchStudents()
  }

  fetchStudents = () => {
    let students = []
    students = JSON.parse(localStorage.getItem("students"))
    console.log(students)
    this.setState({ students })
  }
  render() {
    return (
      <Container className="box-shadow mt-5 rounded">
        <Table striped bordered hover responsive className="my-3 p-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Roll No.</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, i) => {
              return (
                <tr
                  key={i}
                  onClick={() => {
                    this.props.history.push("/edit-details", {
                      index: i + 1,
                      student
                    })
                  }}
                >
                  <td>{i + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.section}</td>
                  <td>{student.rollno}</td>
                  <td>
                    {student.marks === null ? "Unassigned" : student.marks}
                  </td>
                  <td>{student.status}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    )
  }
}
