import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import { DISHES } from './Shared/Dishes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render () {
  return (
    <div>
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/">Ohoho Foods</NavbarBrand>
        </div>
      </Navbar>
    <Menu dishes={this.state.dishes} />
    </div>
  );
}
}

export default App;
