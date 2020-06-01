import React from "react"
import { Container, Form, Button } from "react-bootstrap"
export default class StudentDetails extends React.Component {
  constructor(props) {
    super(props)
    let student = props.location.state?.student
      ? props.location.state?.student
      : {
          name: "",
          class: "",
          section: "",
          rollno: "",
          marks: "",
          status: "None"
        }
    this.state = { student }
  }

  saveDetails = () => {
    let students = JSON.parse(localStorage.getItem("students"))
    if (
      students[this.props.location.state.index - 1].marks !==
      this.state.student.marks
    ) {
      students = [
        ...students.slice(0, this.props.location.state.index - 1),
        this.state.student,
        ...students.slice(this.props.location.state.index)
      ]
      localStorage.setItem("students", JSON.stringify(students))
      this.props.history.replace("/")
    }
  }

  submitDetails = () => {
    let { student } = this.state
    if (
      student.name === "" ||
      student.class === "" ||
      student.section === "" ||
      student.rollno === ""
    ) {
      return
    }
    let students = JSON.parse(localStorage.getItem("students"))
    students.push({
      ...student,
      marks: student.marks === "" ? null : student.marks
    })
    localStorage.setItem("students", JSON.stringify(students))
    this.props.history.replace("/")
  }

  render() {
    return (
      <React.Fragment>
        <Container className="box-shadow w-50 mt-5 rounded d-flex flex-column py-3">
          <div className="row w-100">
            <div className="w-50 col-lg-6 col-md-12">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.student.name}
                  onChange={e => {
                    let { student } = this.state
                    student.name = e.target.value
                    this.setState({ student })
                  }}
                  disabled={this.props.location.state?.index ? true : false}
                  placeholder="Enter Name"
                />
              </Form.Group>
            </div>
            <div className="w-50 col-lg-6 col-md-12">
              <Form.Group>
                <Form.Label>Class</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.student.class}
                  onChange={e => {
                    let { student } = this.state
                    student.class = e.target.value
                    this.setState({ student })
                  }}
                  disabled={this.props.location.state?.index ? true : false}
                  placeholder="Enter Class"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row w-100">
            <div className="w-50 col-lg-6 col-md-12">
              <Form.Group>
                <Form.Label>Section</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.student.section}
                  onChange={e => {
                    let { student } = this.state
                    student.section = e.target.value
                    this.setState({ student })
                  }}
                  disabled={this.props.location.state?.index ? true : false}
                  placeholder="Enter Section"
                />
              </Form.Group>
            </div>
            <div className="w-50 col-lg-6 col-md-12">
              <Form.Group>
                <Form.Label>Roll No</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.student.rollno}
                  onChange={e => {
                    let { student } = this.state
                    student.rollno = e.target.value
                    this.setState({ student })
                  }}
                  disabled={this.props.location.state?.index ? true : false}
                  placeholder="Enter Roll No"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row w-100">
            <div className="w-50 col-lg-6 col-md-12">
              <Form.Group>
                <Form.Label>Marks</Form.Label>
                <Form.Control
                  value={this.state.student.marks}
                  onChange={e => {
                    let status = e.target.value > 50 ? "PASS" : "FAIL"
                    let marks = e.target.value
                    this.setState(state => {
                      return {
                        student: { ...state.student, status, marks }
                      }
                    })
                  }}
                  type="number"
                  max="100"
                  min="0"
                  placeholder="Enter Marks"
                />
              </Form.Group>
            </div>
            <div className="w-50 col-lg-6 col-md-12">
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.student.status}
                  disabled
                  placeholder="None"
                />
              </Form.Group>
            </div>
          </div>
          <Button
            onClick={
              this.props.location.state?.index
                ? this.saveDetails
                : this.submitDetails
            }
            className="align-self-center w-50"
          >
            Save
          </Button>
        </Container>
      </React.Fragment>
    )
  }
}
