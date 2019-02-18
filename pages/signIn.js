import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      email: '',
      name: ''
    };
  }

  onFormSubmit() {
    alert(JSON.stringify(this.state, null, '  '));
  }

  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.onFormSubmit}>
          <Col>
            <FormGroup>
              <Label>User Name</Label>
              <Input
                type="username"
                name="username"
                id="exampleUsername"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default App;