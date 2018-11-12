import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }

  updateFilterCallback = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value});
  }

  render() {
    return (
      <div>
        <FruitBasket filters={this.state.filers} fruit={this.state.fruit} currentFilter={this.state.currentFilter} updateFilterCallback={this.updateFilterCallback} />
      </div>
    )
  }
}
