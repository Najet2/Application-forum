import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import {Form} from "react-bootstrap"

function App() {
  return (
    <div className="App">
   <h1> Application form</h1>

<Form>
  <Form.Group className="mb-3" controlId="formGroupName">
    <Form.Label>Full Name:</Form.Label>
    <br/>
    <Form.Control type="Name" placeholder="Enter your Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email:</Form.Label>
    <br/>
    <Form.Control type="Email" placeholder="Enter your Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Message </Form.Label>
    <br/>
    <Form.Control type="Message" placeholder="Enter your Message" />
  </Form.Group>

</Form>

<Button variant="primary" type="submit">
    Submit
  </Button>

    </div>
  );
}

export default App;
