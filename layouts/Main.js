import React from 'react';
import CustomNavbar from '../components/CustomNavbar';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <CustomNavbar navList={[{ name: "Sign in", pathName: "signIn" }]} />
        {this.props.children}
      </div>
    );
  }
}