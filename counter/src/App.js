import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        // { id: 1, value: 1, product_naam: "pindakaas" },
        // { id: 2, value: 1, product_naam: "Jam" },
        // { id: 3, value: 1, product_naam: "Pijnstiller" },
        // { id: 4, value: 1, product_naam: "Bieslook" }
    ]
 };
 constructor(props){
   super(props);
   console.log('app constructor');
 }
 componentDidMount(){
   console.log('App mounted');
 }
 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter)
     counters[index] = {...counter};
     counters[index].value++;
     console.log(this.state.counters[index].title);
     this.setState({ counters});
    // this.setState({ value: this.state.value + 1 });
    // this.commentThis(product, this.state.value + 1);
};
handleIncrementMinus = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter)
  counters[index] = {...counter};
  counters[index].value--;
  console.log(this.state.counters[index].title);
  this.setState({ counters});
 // this.setState({ value: this.state.value + 1 });
 // this.commentThis(product, this.state.value + 1);
};
id_new = 1;
addProduct = () => {
  var awnser = prompt("Welk product?");
  console.log(awnser);
  if(awnser !== ""){
  this.setState({ counters: [...this.state.counters, {id: this.id_new, value: 1, product_naam: awnser}]});
this.id_new++;
  }
}
 handleReset = () => {
    //  const counters = this.state.counters.map(c => {
    //      c.value = 0;
    //      return c;
    //  });
    const counters = this.state.counters.filter(c => c.id < 0);
    this.setState({ counters });
 };
 handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
 };
  render() {
  return (
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
    <main className = "container text-center">
      <Counters  
      counters={this.state.counters} 
      onReset={this.handleReset} 
      onIncrement={this.handleIncrement} 
      onIncrementMinus={this.handleIncrementMinus} 
      onDelete={this.handleDelete}
      onAdd={this.addProduct} />
    </main>
    </React.Fragment>
  );
  }
}

export default App;
